import type { Encapsulated, CommandRequest } from '@serenityjs/protocol';
import type { Serenity } from '../../Serenity';
import { Logger } from '../../logger';

abstract class CommandRequestHandler {
	public static serenity: Serenity;
	public static logger = new Logger('Handlers', '#3236a8');

	public static handle(packet: CommandRequest): void {
		throw new Error('Handler.handle() is not implemented.');
	}
}

export { CommandRequestHandler };
