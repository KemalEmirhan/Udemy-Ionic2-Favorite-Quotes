export class SettingsService {
    private altBackgorund = false;

    setBackground(isAlt: boolean){
        this.altBackgorund = isAlt;
    }
    
    isAltBackground(){
        return this.altBackgorund;
    }
}