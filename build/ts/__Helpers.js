import { bufferWhen, timer, takeUntil, delay, interval, merge, of, map, throttleTime, tap } from 'rxjs';
//merge, takeUntil, delay, timer,interval, map,tap
export function gradual(gradualFn, finalFn, time, splits = 10, last = false) {
    merge(of(-1), interval(time / splits))
        .pipe(map(i => i + 1), //0.0 -> 1.0
    delay(1), takeUntil(timer(time).pipe(//final
    tap(() => { if (last)
        gradualFn(1); if (finalFn)
        finalFn(); }))), tap((x) => gradualFn(x / splits)) //gradual
    ).subscribe();
}
/*
gFn: 0.0
gFn: 0.1
..
gFn: 0.8
gFn: 0.9
finalFunction (1.0)
*/
export function throttleWrap(obs, time) {
    let nt = obs.pipe(delay(1), map((value) => ({ throttled: true, value })));
    return merge(obs.pipe(throttleTime(time), map((value) => ({ throttled: false, value }))), nt).pipe(bufferWhen(() => nt.pipe()), map((x) => x[0]));
}
//# sourceMappingURL=__Helpers.js.map