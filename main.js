class InMemoryDB {
    constructor() {
        this.transactionInProcess = false;
        this.temp = null;
        this.data = {};
    }

    get(key) {
        return this.data[key] || null;
    }

    put(key, value) {
        try { if (!this.transactionInProcess) {
            throw new Error("Transaction is not in process");
        }
        this.temp[key] = value;
        }
        catch (err)
        { console.error(err.message);}
    }

    begin_transaction() {
        if (this.transactionInProcess) {
            throw new Error("Transaction is already in process");
        }
        if (!this.transactionInProcess) {
            this.temp = {...this.data};
            this.transactionInProcess = true;
        }
    }

    commit() {
        try {if (!this.transactionInProcess) {
            throw new Error("No open transaction to commit");
        }
        this.data = { ...this.temp };
        this.temp = null;
        this.transactionInProcess = false;
        }
        catch (err) { console.error(err.message);}

    }

    rollback() {
        try {if (!this.transactionInProcess) {
            throw new Error("No ongoing transaction to rollback");
        }
        this.temp = null;
        this.transactionInProcess = false;
        }
        catch (err) { console.error(err.message);}
        this.temp = null;
        this.transactionInProcess = false;
    }
}

const inmemoryDB = new InMemoryDB();
console.log(inmemoryDB.get("A"));
inmemoryDB.put("A", 5);
inmemoryDB.begin_transaction();
inmemoryDB.put("A", 5);
console.log(inmemoryDB.get("A"));
inmemoryDB.put("A", 6);
inmemoryDB.commit();
console.log(inmemoryDB.get("A"));
inmemoryDB.commit();
inmemoryDB.rollback();
console.log(inmemoryDB.get("B"));
inmemoryDB.begin_transaction();
inmemoryDB.put("B", 10);
inmemoryDB.rollback();
console.log(inmemoryDB.get("B"));
