import { ILivechatVoipService } from '../../sdk/types/IOmnichannelVoipService';
import { ServiceClass } from '../../sdk/types/ServiceClass';

export class LivechatVoipService extends ServiceClass implements ILivechatVoipService {
	protected name = 'omnichannel-voip';

	getConfiguration(): any {
		return {};
	}
}