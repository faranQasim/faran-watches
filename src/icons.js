import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid icons:
import {
    faHeart,
    faBookOpen,
    faTv,
    faClapperboard,
    faRotateRight
} from '@fortawesome/free-solid-svg-icons';

// Add imported icons to library:
library.add(
    faHeart,
    faBookOpen,
    faTv,
    faClapperboard,
    faRotateRight
);

export { FontAwesomeIcon };
