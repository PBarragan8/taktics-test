import angular from 'angular';
import budgetsIndexUrl from './views/budgets.index.html';
import budgetsDetailUrl from './views/budgets.detail.html';
import BudgetsIndexController from './controllers/budgets.index.controller';
import BudgetsDetailController from './controllers/budgets.detail.controller';

export default angular.module('app.budgets', []).config(routeConfig).name;

function routeConfig($stateProvider) {
  $stateProvider
    .state('budgets', {
      url: '/budgets',
      templateUrl: budgetsIndexUrl,
      controller: BudgetsIndexController,
      controllerAs: 'vm',
    })
    .state('budgets-detail', {
      url: '/budgets/:id',
      templateUrl: budgetsDetailUrl,
      controller: BudgetsDetailController,
      controllerAs: 'vm',
    });
}

routeConfig.$inject = ['$stateProvider'];