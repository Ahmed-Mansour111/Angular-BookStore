"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var BookService = (function () {
    function BookService(_http) {
        this._http = _http;
    }
    BookService.prototype.getBooks = function () {
        return this._http
            .get('api/books/books.json')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        return this.getBooks()
            .map(function (books) { return books.find(function (book) { return book.id === id; }); })
            .do(function (data) { return console.log(data); });
    };
    BookService.prototype.handleError = function (error) {
        console.error(error);
        var message = "Error status code " + error.status + " at " + error.url;
        return Observable_1.Observable.throw(message);
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map