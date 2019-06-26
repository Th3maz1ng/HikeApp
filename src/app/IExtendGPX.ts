import{MarkerOptions} from 'leaflet';

export interface IExtendGPX extends MarkerOptions{
	startIconUrl?: string;
	endIconUrl?: string ,
    shadowUrl?: string,
    wptIconUrls?: Object,
} 