// Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request.
// This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

interface Command {
  execute(args: any[]): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload) {
    this.payload = payload;
  }

  public execute(args: any[]): void {
    console.log(
      `Execute simple command with the following args ${args} the following payload ${this.payload}`
    );
  }
}

class Invoker {
  startCommand: Command;
  endCommand: Command;

  pull: Command[] = [];

  onStart(command: Command) {
    this.startCommand = command;
  }

  onEnd(command: Command) {
    this.endCommand = command;
  }

  add(command: Command) {
    this.pull.push(command);
  }

  run(args: any[]) {
    if (this.startCommand) {
      this.startCommand.execute(args);
    }

    for (const command of this.pull) {
      command.execute(args);
    }

    if (this.endCommand) {
      this.endCommand.execute(args);
    }
  }
}
