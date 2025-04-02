/* eslint-disable @typescript-eslint/no-explicit-any */
import {toDate} from "date-fns-tz";

const dateTimeRegex = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]|60))?(\.[0-9]{1,9})?)?)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)?)?)?$/

export function formatDate(d: any){
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'};

    if (dateTimeRegex.test(d)){
        return toDate(d).toLocaleDateString('en-US', options);
    }

    return new Date(d).toLocaleDateString('en-US', options);
}