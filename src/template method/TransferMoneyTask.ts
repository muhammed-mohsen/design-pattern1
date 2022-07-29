import { Task } from './Task';
export class TransferMoneyTask extends Task{
    protected doExecute() {
        console.log("transfer Money Task")
    }

}