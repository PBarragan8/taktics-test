export default function BudgetsIndexController($rootScope, $state, Budget) {
  var vm = this;

  vm.budgets = [];
  vm.total = 0;
  vm.page = 0;
  vm.pageSize = 10;
  vm.selectedIds = [];
  vm.filters = { name: '', clientName: '' };

  vm.loadBudgets = function() {
    var where = {};
    if (vm.filters.name) where.name = { like: vm.filters.name, options: 'i' };
    if (vm.filters.clientName) where.clientName = { like: vm.filters.clientName, options: 'i' };

    var filter = {
      where: where,
      limit: parseInt(vm.pageSize),
      skip: vm.page * parseInt(vm.pageSize),
      order: 'date DESC'
    };

    Budget.find({ filter: filter }).$promise.then(function(data) {
      vm.budgets = data;
      vm.selectedIds = [];
    });

    Budget.count({ where: where }).$promise.then(function(res) {
      vm.total = res.count;
    });
  };

  vm.applyFilters = function() {
    vm.page = 0;
    vm.loadBudgets();
  };

  vm.clearFilters = function() {
    vm.filters = { name: '', clientName: '' };
    vm.page = 0;
    vm.loadBudgets();
  };

  vm.onSelect = function(budget) {
    if (budget.selected) {
      vm.selectedIds.push(budget.id);
    } else {
      vm.selectedIds = vm.selectedIds.filter(function(id) { return id !== budget.id; });
    }
  };

  vm.deleteBudget = function(budget) {
    if (!confirm('Are you sure you want to delete "' + budget.name + '"?')) return;
    Budget.deleteById({ id: budget.id }).$promise.then(function() {
      vm.loadBudgets();
    });
  };

  vm.deleteSelected = function() {
    if (!confirm('Delete ' + vm.selectedIds.length + ' budgets?')) return;
    var promises = vm.selectedIds.map(function(id) {
      return Budget.deleteById({ id: id }).$promise;
    });
    Promise.all(promises).then(function() {
      vm.loadBudgets();
    });
  };

  vm.mergeSelected = function() {
    var selected = vm.budgets.filter(function(b) { return b.selected; });
    var merged = {
      name: selected.map(function(b) { return b.name; }).join(' + '),
      clientName: selected[0].clientName,
      date: new Date(),
      chapters: [],
      totalCostImport: 0,
      totalSaleImport: 0
    };

    selected.forEach(function(b) {
      if (b.chapters) merged.chapters = merged.chapters.concat(b.chapters);
      merged.totalCostImport += b.totalCostImport || 0;
      merged.totalSaleImport += b.totalSaleImport || 0;
    });

    Budget.create(merged).$promise.then(function(newBudget) {
      var deletePromises = vm.selectedIds.map(function(id) {
        return Budget.deleteById({ id: id }).$promise;
      });
      Promise.all(deletePromises).then(function() {
        vm.loadBudgets();
        $state.go('budgets.detail', { id: newBudget.id });
      });
    });
  };

  vm.prevPage = function() {
    if (vm.page > 0) { vm.page--; vm.loadBudgets(); }
  };

  vm.nextPage = function() {
    vm.page++; vm.loadBudgets();
  };

  vm.loadBudgets();
}

BudgetsIndexController.$inject = ['$rootScope', '$state', 'Budget'];