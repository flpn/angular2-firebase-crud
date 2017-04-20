import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Item } from '../shared/item';

@Injectable()
export class BaseService {

    constructor(private angularFire: AngularFire) {}

}