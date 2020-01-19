import "mocha";
import { spawn, ChildProcess } from 'child_process';
import { getSlsOfflinePort } from "./support/getSlsOfflinePort";
import { Done } from "mocha";

let slsOfflineProcess: ChildProcess;

before(function (done) {
  // increase mocha timeout for this hook to allow sls offline to start
  this.timeout(30000);

  console.log("[Tests Bootstrap] Start");

  startSlsOffline(function (err) {
    if (err) {
      return done(err);
    }

    console.log("[Tests Bootstrap] Done");
    done();
  });
});

after(function () {
  console.log("[Tests Teardown] Start");

  stopSlsOffline();

  console.log("[Tests Teardown] Done");
});

// Helper functions

function startSlsOffline(done: Done) {
  slsOfflineProcess = spawn("sls", [
    "offline",
    "start",
    "--port",
    getSlsOfflinePort()
  ]);

  console.log(
    `Serverless: Offline started with PID : ${slsOfflineProcess.pid}`
  );

  slsOfflineProcess.stdout.on("data", data => {
    if (/listening on/.test(data.toString())) {
      console.log(data.toString().trim());
      done();
    }
  });

  slsOfflineProcess.stderr.on("data", errData => {
    console.log(`Error starting Serverless Offline:\n${errData}`);
    done(errData);
  });
}

function stopSlsOffline() {
  slsOfflineProcess.kill();
  console.log("Serverless Offline stopped");
}
