import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Solid icons:
import {
    faCheck,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

// Add imported icons to library:
library.add(
    faCheck,
    faCircleQuestion,
);

export { FontAwesomeIcon };
