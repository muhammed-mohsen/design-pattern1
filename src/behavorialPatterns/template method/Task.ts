import { AuditTail } from './AuditTrail';
export abstract class Task {
private _auditTail:AuditTail
	constructor( ) {
    this._auditTail = new AuditTail();
	}
  public  execute(){
        this._auditTail.record();
        this.doExecute();
    }

protected abstract doExecute()
    
}
// import { TransferMoneyTask } from './template method/TransferMoneyTask';
// const task = new TransferMoneyTask()
// task.execute()