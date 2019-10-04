import "tns-core-modules/globals";

const context: Worker = self as any;

context.onmessage = msg => {
    let secs = 5;

    const i = setInterval(() => {
        (<any>global).postMessage(`${secs} sec rest`);
        secs--;

        if (secs === 0) {
            (<any>global).postMessage("the following data just processed by the web worker: " + JSON.stringify(msg));
            clearInterval(i);
        }
    }, 1000);
};
