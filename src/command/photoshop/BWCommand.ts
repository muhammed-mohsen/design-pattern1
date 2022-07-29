import Command from '../Fx/Command';
export class BWCommand  implements Command{
    execute(): void {
       console.log('BW Command.');
    }

}

// import { CompositeCommand } from './command/CompositeCommand';
// import { BWCommand } from './command/photoshop/BWCommand';
// import { ResizeCommand } from './command/photoshop/ResizeCommand';
// const compositeCommand = new CompositeCommand();
// compositeCommand.add(new ResizeCommand())
// compositeCommand.add(new BWCommand())
// compositeCommand.execute()
