import { Component, OnInit, NgZone } from "@angular/core";
import { WorkerService } from "../worker.service";

@Component({
    selector: "ns-main",
    templateUrl: "./main.component.html"
})
export class MainComponent implements OnInit {
    result = 'no result...';
    private tsWorker: Worker;

    constructor(private workerService: WorkerService, private zone: NgZone) { }

    ngOnInit(): void {
        this.tsWorker = this.workerService.initTsWorker();
        this.tsWorker.onmessage = m => this.logWorkerMessage(m);
    }

    act() {
        this.result = 'starting...';
        this.tsWorker.postMessage("web worker loader executed!");
    }

    private logWorkerMessage(message: MessageEvent) {
        this.zone.run(() => {
            this.result = message.data;
        });
    }
}
