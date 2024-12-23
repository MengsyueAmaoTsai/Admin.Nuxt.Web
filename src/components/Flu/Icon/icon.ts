import { Color, IconSize, IconVariant } from "../types";

export class IconInfo  {
    name: string = '';
    size: IconSize = IconSize.Size24;
    variant: IconVariant = IconVariant.Regular;
    
    content: string = '';
    color: string = '';

    public withColor(color: string): IconInfo;    
    public withColor(color: Color): IconInfo;
    public withColor(arg1: string | Color): IconInfo {
        this.color = arg1
        return this;
    }
}
