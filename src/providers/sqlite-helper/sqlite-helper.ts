import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the SqliteHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SqliteHelperProvider {

  isOpen: any;
  Ortem: SQLiteObject;


  constructor(public storage: SQLite) {
    console.log('Hello DatabaseHelperProvider Provider');
    this.CreateDB();
  }

  CreateDB(): Promise<Boolean> {
    return new Promise((resolve, error) => {
      if (!this.isOpen) {
        this.storage = new SQLite();
        this.storage.create({ name: "OrtemRestaurant.db", location: "default" }).then((db: SQLiteObject) => {
          this.Ortem = db;
          this.isOpen = true;
          db.executeSql("CREATE TABLE IF NOT EXISTS tblTest ( ID INTEGER PRIMARY KEY AUTOINCREMENT , Name TEXT)", []).then(res => { alert('Table Test Created') }, error => { console.log('Table Transaction Not Created'); });
        }).catch((error2) => {
          alert("Erro While creating DB ")
          alert(error);
          return error(false);
        })
      }
    });

  }

  SelectQuerySqlite(param) {
    return new Promise((resolve, reject) => {
      this.Ortem.executeSql(param, []).then((data) => {
        let activityValues = [];
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            activityValues.push(data.rows.item(i));
          }
        }
        console.table(activityValues)
        resolve(activityValues);
      }, (error) => {
        reject(error);
      })
    });
  }

  InsertQuerySqlite(updateQuery, param) {
    console.log(updateQuery);
    return new Promise((resolve, reject) => {
      this.Ortem.executeSql(updateQuery, param).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);

        console.log(error.message);
        console.log('Error');
      })
    });
  }

  UpdateQuerySqlite(updateQuery, param) {
    this.Ortem.executeSql(updateQuery, param).then((data) => {
    });
  }

  ExecuteIntoSQlite(query, param) {

    console.log(query);
    return new Promise((resolve, reject) => {
      this.Ortem.executeSql(query, param).then((data) => {

      }, (error) => {
        reject(error);
        console.log("Error");
      })
    });

  }
}
