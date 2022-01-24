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
  queuing(requestId) {
    return new Promise(resolve => {
      let time = Math.floor(Math.random() * 10000);
      setTimeout(() => {
        resolve(requestId);
      }, time);
      console.log('случайное время', time);
    });
  }
}
const concQueue = new ConcurencyQueue([]);

concQueue.queuing(1).then(value => {
  concQueue.queue(value);
  console.log('добавление элемента 1', new Date(), concQueue.getConcurency());
});
concQueue.queuing(2).then(value => {
  concQueue.queue(value);
  console.log('добавление элемента 2', new Date(), concQueue.getConcurency());
});
concQueue.queuing(3).then(value => {
  concQueue.queue(value);
  console.log('добавление элемента 3', new Date(), concQueue.getConcurency());
});
concQueue.queuing(4).then(value => {
  concQueue.queue(value);
  console.log('добавление элемента 4', new Date(), concQueue.getConcurency());
});
concQueue.queuing(5).then(value => {
  concQueue.queue(value);
  console.log('добавление элемента 5', new Date(), concQueue.getConcurency());
});

concQueue.queuing(2).then(value => {
  concQueue.deQueue(value);
  console.log('удаление элемента 2', new Date(), concQueue.getConcurency());
});
