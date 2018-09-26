import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 11, firstName: 'Иван', lastName: 'Васильев', age: 23, phone1: '+38067 11', phone2: '+38044 11'},
      {id: 12, firstName: 'Василий', lastName: 'Петров', age: 35, phone1: '+38067 12', phone2: '+38044 12'},
      {id: 13, firstName: 'Петр', lastName: 'Павленко', age: 22, phone1: '+38067 13', phone2: '+38044 13'},
      {id: 14, firstName: 'Павел', lastName: 'Маркович', age: 35, phone1: '+38067 14', phone2: '+38044 14'},
      {id: 15, firstName: 'Марк', lastName: 'Ильинский', age: 15, phone1: '+38067 15', phone2: '+38044 15'},
      {id: 16, firstName: 'Илья', lastName: 'Андрейченко', age: 25, phone1: '+38067 16', phone2: '+38044 16'},
      {id: 17, firstName: 'Андрей', lastName: 'Викторов', age: 26, phone1: '+38067 17', phone2: '+38044 17'},
      {id: 18, firstName: 'Виктор', lastName: 'Петров', age: 22, phone1: '+38067 18', phone2: '+38044 18'},
      {id: 19, firstName: 'Петр', lastName: 'Смит', age: 20, phone1: '+38067 19', phone2: '+38044 19'},
      {id: 20, firstName: 'Сергей', lastName: 'Иванов', age: 25, phone1: '+38067 20', phone2: '+38044 20'},
    ];
    return {students};
  }
}
