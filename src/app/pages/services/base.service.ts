import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Item } from '../shared/item';

@Injectable()
export class BaseService {

    private itemList: FirebaseListObservable<Item[]>;

    constructor(private angularFire: AngularFire) {
        this.itemList = this.angularFire.database.list('/items');
    }

    create(item: Item) {
        this.itemList.push(item)
            .then(() => {
                alert('Item created successfully!');
            });
    }

    retrieve(key: string): Promise<Item> {
        return new Promise<Item>((resolve, reject) => {
            this.angularFire.database.object('/items/' + key)
                .subscribe(
                    result => resolve(result),
                    error => reject(error)
                );
        });
    }

    update(key: string, data: any) {
        this.itemList.update(key, data)
            .then(() => {
                alert('Item updated!');
            });
    }

    delete(key: string) {
        this.itemList.remove(key)
            .then(() => {
                alert('Item deleted!');
            });
    }

    getItemsList(): Observable<Item[]> {
        return this.itemList;
    }
}