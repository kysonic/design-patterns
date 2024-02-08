// Observer is a behavioral design pattern that lets you define a subscription mechanism to notify
// multiple objects about any events that happen to the object they’re observing.

// Pub/Sub, EventEmitter

type Handler = (message: string) => void;

class Subscriber {
  type: string;
  handler: Handler;
  constructor(type: string, handler: Handler) {
    this.type = type;
    this.handler = handler;
  }

  execute(message: string) {
    this.handler(message);
  }
}

class Observer {
  subscribers: Subscriber[] = [];

  subscribe(event: string, handler: Handler) {
    this.subscribers.push(new Subscriber(event, handler));
  }

  notify(event: string, message: string) {
    for (const subscriber of this.subscribers) {
      if (subscriber.type === event) {
        subscriber.execute(message);
      }
    }
  }
}

const observer = new Observer();

observer.subscribe('click', (message) => {
  console.log(`Click performed with message: ${message}`);
});

observer.subscribe('tap', (message) => {
  console.log(`Tap performed with message: ${message}`);
});

observer.subscribe('tap', (message) => {
  console.log(`Tap2 performed with message: ${message}`);
});

observer.notify('click', 'Clack');
observer.notify('tap', 'Shlap');
