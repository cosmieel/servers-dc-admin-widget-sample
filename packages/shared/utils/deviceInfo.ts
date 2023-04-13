import { Ref, useContext, computed } from '@nuxtjs/composition-api';

type UseContextReturn = ReturnType<typeof useContext>;

interface DeviceInfo {
    isMobile : Ref<boolean>
    isDesktop : Ref<boolean>
}

export const deviceInfo = ( { app } : UseContextReturn ) : DeviceInfo => {
    return {
        isMobile  : computed( () => app?.$device.isMobile ),
        isDesktop : computed( () => app?.$device.isDesktop ),
    }
}
