import Command from './Fx/Command';
export class CompositeCommand  implements Command{

    private _commands:Command[] = []
     add(param:Command) {
        this._commands.push(param)
    }
    execute(): void {
        this._commands.forEach(command=>{
            command.execute()
        })
    }

}