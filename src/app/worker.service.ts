import { Injectable } from "@angular/core";

// add if building with webpack
import * as TsWorker from "nativescript-worker-loader!./workers/typescript.worker";

@Injectable()
export class WorkerService {
  constructor() {
  }

  initTsWorker() {
    // add if building with webpack
    const worker = new TsWorker();

    // remove if building with webpack
    // const worker = new Worker("./workers/typescript.worker");

    return worker;
  }
}
