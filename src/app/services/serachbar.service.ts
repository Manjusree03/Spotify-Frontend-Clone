import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SearchBarService {
    public isSearchVisible:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public ishomeabs : BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);
    public isplaysongs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


}

