import { switchMap, interval, merge, of, map, Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { gradual } from './__Helpers';
export async function randImg() {
    let img = document.getElementById('randImg');
    merge(of(1), interval(4000)).pipe(switchMap((x) => (x % 2 == 0)
        ? fromFetch('https://picsum.photos/600/400')
            .pipe(map((x) => x.url))
        : new Observable((subscriber) => {
            (async function () {
                subscriber.next((await fetch('https://picsum.photos/400/600')).url);
                subscriber.complete();
            })();
        }))).subscribe(url => {
        img.setAttribute('src', url);
    });
    gradual((v) => {
        img.style.opacity = ((1.0 - v) / 2).toString();
    }, null, 16000, 100, true);
}
//# sourceMappingURL=randImg.js.map