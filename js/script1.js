// Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      amount,
      type,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return console.log(`К сожалению Ваша сумма ${amount} больше, чем доступно на Вашем счету`);
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      const { id: trId } = transaction;
      if (trId === id) {
        return console.log(transaction);
      }
    }
    return console.log(`К сожалению нет транзакции с id: ${id}`);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const { type: trType } of this.transactions) {
      if (trType === type) {
        total += 1;
      }
    }
    return console.log(total);
  },
};

account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
// console.log(account);

account.withdraw(2000);
account.withdraw(500);
// console.log(account);

account.getBalance();

account.getTransactionDetails(5);

account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);

// ========Следующая задача=========
