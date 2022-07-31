import CustomerService from './CustomService';
import Command from './Fx/Command';
export default class AddCustomerCommand implements Command{
    private _service:CustomerService

	constructor(service:CustomerService) {
this._service = service
	}

    execute(): void {
        this._service.addCustomer()
    }

}