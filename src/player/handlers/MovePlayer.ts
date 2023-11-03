import type { MovePlayer } from '@serenityjs/protocol';
import type { Player } from '../Player';
import { PlayerHandler } from './PlayerHandler';

class MovePlayerHandler extends PlayerHandler {
	public static override handle(packet: MovePlayer, player: Player): void {
		if (packet.cause) {
			return this.logger.error('MovePlayerHandler not implemented yet: MovePlayer.cause case');
		}

		// Update the player position
		player.position = packet.position;
		player.rotation = { x: packet.pitch, z: packet.yaw };
		player.headYaw = packet.headYaw;
		player.onGround = packet.onGround;

		const players = player.world.players.values();
		for (const p of players) {
            if(p === player) continue;
			p.broadcastMovement(packet.mode, player);
		}
	}
}

export { MovePlayerHandler };
