import Command from '../Fx/Command';
export class ResizeCommand  implements Command{
    execute(): void {
        console.log('Resize command.');
    }

}