// Реализовать класс очереди запросов.Методы queue, deQueue, queuing обязательно реализовать.
//  Задано количество одновременно выполняемых запросов.В качестве запросов использовать Promise которые резолвятся через случайное время.
//  Пример ниже можно доработать как Вы решите.
class ConcurencyQueue {
  constructor(concurency) {
    this._concurency = [];
  }
  getConcurency() {
    return this._concurency;
  }
  //встать в очередь
  queue(concurency) {
    this._concurency.push(concurency);
  }
  //удалить из очереди после выполнения
  deQueue(requestId) {
    const index = this._concurency.indexOf(requestId);
    if (index > -1) {
      this._concurency.splice(index, 1);
    }
  }
  //Обработка очереди
  queuing() {
    return new Promise(resolve => {
      let time = Math.floor(Math.random() * 10000) + 1;
      setTimeout(() => {
        resolve(this);
      }, time);
    });
  }
}
const concQueue = new ConcurencyQueue([]);
concQueue
  .queuing()
  .then(value => {
    value.queue(1);
    console.log('добавление элемента 1', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.queue(2);
    console.log('добавление элемента 2', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.queue(3);
    console.log('добавление элемента 3', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.queue(4);
    console.log('добавление элемента 4', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.queue(5);
    console.log('добавление элемента 5', new Date(), concQueue.getConcurency());
    return value;
  });

concQueue
  .queuing()
  .then(value => {
    value.deQueue(1);
    console.log('удаление 1 элемента', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.deQueue(2);
    console.log('удаление 2 элемента', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.deQueue(3);
    console.log('удаление 3 элемента', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.deQueue(4);
    console.log('удаление 4 элемента', new Date(), concQueue.getConcurency());
    return value;
  })
  .then(value => {
    value.deQueue(5);
    console.log('удаление 5 элемента', new Date(), concQueue.getConcurency());
    return value;
  });
