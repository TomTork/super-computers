const _length = document.getElementById('table-row') as HTMLInputElement;
const _height = document.getElementById('table-col') as HTMLInputElement;
const _value = document.getElementById('table-value') as HTMLInputElement;
const _calculate = document.getElementById('calculate');
const _table = document.getElementById('table');

let __length: number = -1;
let __height: number = -1;
let __value: number = -1;

function checkValueIsInt(value: string) {
    return value.split('').every((it) => ('1234567890'.includes(it)));
}

if (_length && _height && _value && _calculate && _table) {
    _length.addEventListener('input', (event) => {
        const value = (event.target as HTMLInputElement).value;
        if (checkValueIsInt(value)) {
            __length = Number(value);
        } else {
            __length = -1;
        }
    });

    _height.addEventListener('input', (event) => {
        const value = (event.target as HTMLInputElement).value;
        if (checkValueIsInt(value)) {
            __height = Number(value);
        } else {
            __height = -1;
        }
    });

    _value.addEventListener('input', (event) => {
        const value = (event.target as HTMLInputElement).value;
        if (checkValueIsInt(value)) {
            __value = Number(value);
        } else {
            __value = -1;
        }
    });

    _calculate.addEventListener('click', () => {
        if (__length <= 0 || __height <= 0 || isNaN(__value)) {
            alert('Данные введены некорректно!');
        } else {
            _table.innerHTML = '';

            const table = document.createElement('table');
            table.style.borderCollapse = 'collapse';
            table.style.border = '1px solid white';

            let apply = 0;
            for (let i = 0; i < __height; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < __length; j++) {
                    const cell = document.createElement('td');
                    if (j < apply || j >= (__length - apply)) {
                        cell.textContent = __value.toString();
                    } else {
                        cell.textContent = '0';
                    }
                    cell.style.border = '1px solid white';
                    cell.style.padding = '5px';
                    row.appendChild(cell);
                }
                apply++;
                table.appendChild(row);
            }

            _table.appendChild(table);
        }
    });
}