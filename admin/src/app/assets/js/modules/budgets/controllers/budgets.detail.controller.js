export default function BudgetsDetailController($rootScope, $state, $stateParams, Budget) {
  var vm = this;

  vm.isNew = $stateParams.id === 'new';
  vm.budget = {
    name: '',
    clientName: '',
    date: new Date(),
    thumbnail: '',
    chapters: [],
    totalCostImport: 0,
    totalSaleImport: 0
  };

  if (!vm.isNew) {
    Budget.findById({ id: $stateParams.id }).$promise.then(function(data) {
      vm.budget = data;
      if (!vm.budget.chapters) vm.budget.chapters = [];
    });
  }

  // --- Chapters & Batches ---
  vm.addChapter = function() {
    vm.budget.chapters.push({ name: 'New Chapter', batches: [], totalCostImport: 0, totalSaleImport: 0 });
  };

  vm.removeChapter = function(index) {
    vm.budget.chapters.splice(index, 1);
    vm.recalcBudget();
  };

  vm.addBatch = function(chapter) {
    chapter.batches.push({
      name: 'New Batch',
      amount: 0,
      materialCostImport: 0,
      labourCostImport: 0,
      saleCoeffMaterial: 1,
      saleCoeffLabour: 1,
      unitaryCostImport: 0,
      totalCostImport: 0,
      unitarySaleCost: 0,
      totalSaleImport: 0
    });
  };

  vm.removeBatch = function(chapter, batchIndex) {
    chapter.batches.splice(batchIndex, 1);
    vm.recalcChapter(chapter);
  };

  // --- Cálculos en cascada ---
  vm.recalcBatch = function(batch, chapter) {
    batch.unitaryCostImport = (batch.materialCostImport || 0) + (batch.labourCostImport || 0);
    batch.totalCostImport = batch.unitaryCostImport * (batch.amount || 0);
    batch.unitarySaleCost = ((batch.materialCostImport || 0) * (batch.saleCoeffMaterial || 1)) +
                            ((batch.labourCostImport || 0) * (batch.saleCoeffLabour || 1));
    batch.totalSaleImport = batch.unitarySaleCost * (batch.amount || 0);
    vm.recalcChapter(chapter);
  };

  vm.recalcChapter = function(chapter) {
    chapter.totalCostImport = (chapter.batches || []).reduce(function(sum, b) { return sum + (b.totalCostImport || 0); }, 0);
    chapter.totalSaleImport = (chapter.batches || []).reduce(function(sum, b) { return sum + (b.totalSaleImport || 0); }, 0);
    vm.recalcBudget();
  };

  vm.recalcBudget = function() {
    vm.budget.totalCostImport = (vm.budget.chapters || []).reduce(function(sum, c) { return sum + (c.totalCostImport || 0); }, 0);
    vm.budget.totalSaleImport = (vm.budget.chapters || []).reduce(function(sum, c) { return sum + (c.totalSaleImport || 0); }, 0);
  };

  // --- Thumbnail ---
  vm.onFileSelect = function(files) {
    if (!files || !files[0]) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      vm.budget.thumbnail = e.target.result;
      $rootScope.$apply();
    };
    reader.readAsDataURL(files[0]);
  };

  vm.removeThumbnail = function() {
    vm.budget.thumbnail = '';
  };

  // --- Guardar ---
  vm.save = function() {
    var action = vm.isNew
      ? Budget.create(vm.budget).$promise
      : Budget.prototype$patchAttributes({ id: vm.budget.id }, vm.budget).$promise;

    action.then(function() {
      $state.go('budgets');
    });
  };

  vm.cancel = function() {
    $state.go('budgets');
  };
}

BudgetsDetailController.$inject = ['$rootScope', '$state', '$stateParams', 'Budget'];