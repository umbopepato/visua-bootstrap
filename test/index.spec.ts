import {visua} from 'visua';
import MyPlugin from '../index';

describe('run()', () => {
    let styleMap;

    before(async () => {

        // To test your plugin add sample variables to identity.css
        // then before running other tests load it with the Visua API:
        styleMap = await visua({

            // The test script is run from the main folder so
            // this tells Visua to look for the identity file
            // in the test folder
            path: 'test',

            // This stops the execution on parsing errors
            strict: true,
        });

    });

    it('should... ', () => {
        // Run your plugin by directly calling the `run` method
        new MyPlugin().run(styleMap, {
            // Pass here some options if needed
        });
    });

});