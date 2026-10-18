// The English stems are the primary task text. These notes teach how to parse them.
const EXAM_GUIDES={
fractions:[
 {phrase:'What is',meaning:{ru:'«Чему равно?» — нужно вычислить значение.',en:'Calculate the value.',es:'«¿Cuánto es?» — calcula el valor.',ar:'«ما القيمة؟» — احسب الناتج.'},trap:{ru:'Знаменатели одинаковы: не складывай их.',en:'The denominators match; do not add them.',es:'Los denominadores coinciden; no los sumes.',ar:'المقامات متساوية؛ لا تجمعها.'}},
 {phrase:'What fraction',meaning:{ru:'«Какую долю?» — запиши часть / целое.',en:'Write part divided by whole.',es:'Escribe parte / total.',ar:'اكتب الجزء مقسومًا على الكل.'},trap:{ru:'Ответ 3/12 верен как промежуточный шаг, но сократи дробь.',en:'3/12 is an intermediate form; simplify it.',es:'3/12 es un paso intermedio; simplifica.',ar:'‏3/12 خطوة وسيطة؛ بسّط الكسر.'}}
],
ratios:[
 {phrase:'at the same rate',meaning:{ru:'«По той же цене за штуку». Сначала найди цену одного.',en:'The unit price stays constant. Find it first.',es:'El precio por unidad no cambia. Hállalo primero.',ar:'يبقى سعر الوحدة ثابتًا؛ احسبه أولًا.'},trap:{ru:'Не умножай $18 сразу на 5: $18 — цена трёх билетов.',en:'$18 buys three tickets, not one.',es:'$18 es el precio de tres entradas, no de una.',ar:'‏18 دولارًا ثمن ثلاث تذاكر، لا تذكرة واحدة.'}},
 {phrase:'ratio of blue to red',meaning:{ru:'Порядок важен: синие : красные = 2 : 3.',en:'Order matters: blue : red = 2 : 3.',es:'El orden importa: azules : rojas = 2 : 3.',ar:'الترتيب مهم: الزرقاء : الحمراء = 2 : 3.'},trap:{ru:'Не переставляй 2 и 3 местами.',en:'Do not reverse 2 and 3.',es:'No inviertas 2 y 3.',ar:'لا تعكس 2 و3.'}}
],
equations:[
 {phrase:'Solve',meaning:{ru:'«Реши» — найди значение переменной, при котором равенство верно.',en:'Find the value of the variable that makes the equation true.',es:'Halla el valor de la variable que hace verdadera la ecuación.',ar:'أوجد قيمة المتغير التي تحقق المعادلة.'},trap:{ru:'После вычитания 7 ещё нужно разделить на 4.',en:'After subtracting 7, you still need to divide by 4.',es:'Después de restar 7, divide entre 4.',ar:'بعد طرح 7، لا تنس القسمة على 4.'}},
 {phrase:'what is x',meaning:{ru:'Спрашивают само значение x, а не x − 3.',en:'The question asks for x itself, not x − 3.',es:'Piden x, no x − 3.',ar:'المطلوب قيمة x نفسها، لا x − 3.'},trap:{ru:'5 — это значение x − 3; прибавь 3.',en:'5 is x − 3; add 3 to find x.',es:'5 es x − 3; suma 3 para hallar x.',ar:'‏5 هي قيمة x − 3؛ أضف 3 لإيجاد x.'}}
],
functions:[
 {phrase:'when x = 4',meaning:{ru:'«Когда x = 4» — подставь 4 вместо каждого x.',en:'Substitute 4 for x.',es:'Sustituye x por 4.',ar:'عوّض 4 مكان x.'},trap:{ru:'Не забудь прибавить постоянный член +2.',en:'Do not forget the constant +2.',es:'No olvides sumar la constante +2.',ar:'لا تنس إضافة الثابت +2.'}},
 {phrase:'slope',meaning:{ru:'«Наклон»: изменение y при увеличении x на 1.',en:'Change in y for a one-unit increase in x.',es:'Cambio en y cuando x aumenta una unidad.',ar:'تغيّر y عندما تزيد x بمقدار وحدة.'},trap:{ru:'7 — пересечение с осью y, а не наклон.',en:'7 is the y-intercept, not the slope.',es:'7 es la intersección con el eje y, no la pendiente.',ar:'‏7 هو تقاطع محور y، وليس الميل.'}}
],
exponents:[
 {phrase:'What is 2³',meaning:{ru:'Маленькая 3 означает три множителя 2.',en:'The small 3 means three factors of 2.',es:'El 3 pequeño indica tres factores 2.',ar:'الرقم 3 الصغير يعني ضرب ثلاثة عوامل من 2.'},trap:{ru:'Это не 2 × 3.',en:'This is not 2 × 3.',es:'No es 2 × 3.',ar:'هذا ليس 2 × 3.'}},
 {phrase:'solutions',meaning:{ru:'«Решения» во множественном числе: проверь оба множителя.',en:'Plural: check both factors.',es:'Está en plural: comprueba ambos factores.',ar:'الكلمة بصيغة الجمع: افحص كلا العاملين.'},trap:{ru:'При x − 4 = 0 получается +4, а при x + 1 = 0 получается −1.',en:'x − 4 = 0 gives +4; x + 1 = 0 gives −1.',es:'x − 4 = 0 da +4; x + 1 = 0 da −1.',ar:'‏x − 4 = 0 يعطي +4؛ وx + 1 = 0 يعطي −1.'}}
],
data:[
 {phrase:'of 80',meaning:{ru:'В процентах «of» означает «от» и обычно умножение.',en:'With a percent, “of” means multiplication.',es:'Con porcentajes, «of» indica multiplicación.',ar:'مع النسبة المئوية، تعني «of» الضرب.'},trap:{ru:'25% — четверть, а не число 25, которое нужно вычесть.',en:'25% is one quarter; do not subtract 25.',es:'25% es un cuarto; no restes 25.',ar:'‏25% ربع العدد؛ لا تطرح 25.'}},
 {phrase:'mean',meaning:{ru:'«Среднее арифметическое»: сумма / количество.',en:'The arithmetic average: sum divided by count.',es:'La media aritmética: suma dividida entre cantidad.',ar:'المتوسط الحسابي: المجموع مقسومًا على العدد.'},trap:{ru:'24 — сумма, но вопрос просит среднее.',en:'24 is the sum, but the question asks for the mean.',es:'24 es la suma; la pregunta pide la media.',ar:'‏24 هو المجموع، لكن المطلوب المتوسط.'}}
],
area:[
 {phrase:'area',meaning:{ru:'«Площадь»: сколько квадратных единиц внутри фигуры.',en:'The number of square units inside a shape.',es:'Número de unidades cuadradas dentro de la figura.',ar:'عدد الوحدات المربعة داخل الشكل.'},trap:{ru:'Не вычисляй периметр (сумму сторон).',en:'Do not calculate perimeter (the sum of the sides).',es:'No calcules el perímetro (suma de los lados).',ar:'لا تحسب المحيط (مجموع الأضلاع).'}},
 {phrase:'base and height',meaning:{ru:'«Основание и высота» — две величины для площади треугольника.',en:'The two dimensions used for triangle area.',es:'Las dos medidas para calcular el área del triángulo.',ar:'البعدان المستخدمان لحساب مساحة المثلث.'},trap:{ru:'После умножения 10 × 6 раздели на 2.',en:'After multiplying 10 × 6, divide by 2.',es:'Después de multiplicar 10 × 6, divide entre 2.',ar:'بعد ضرب 10 × 6، اقسم على 2.'}}
],
triangles:[
 {phrase:'hypotenuse',meaning:{ru:'«Гипотенуза» — самая длинная сторона напротив прямого угла.',en:'The longest side, opposite the right angle.',es:'El lado más largo, opuesto al ángulo recto.',ar:'الضلع الأطول المقابل للزاوية القائمة.'},trap:{ru:'100 — квадрат гипотенузы; извлеки корень.',en:'100 is the square of the hypotenuse; take the square root.',es:'100 es el cuadrado de la hipotenusa; saca la raíz.',ar:'‏100 مربع طول الوتر؛ خذ الجذر التربيعي.'}},
 {phrase:'other leg',meaning:{ru:'«Другой катет» — короткая сторона. Из квадрата гипотенузы вычти квадрат известного катета.',en:'A shorter side. Subtract the known leg’s square from the hypotenuse’s square.',es:'Un lado corto. Resta el cuadrado del cateto conocido al de la hipotenusa.',ar:'ضلع قائم أقصر. اطرح مربع الضلع المعروف من مربع الوتر.'},trap:{ru:'Здесь нужно вычитать 5² из 13², а не складывать.',en:'Subtract 5² from 13²; do not add them.',es:'Resta 5² de 13²; no los sumes.',ar:'اطرح 5² من 13²؛ لا تجمعهما.'}}
]};
const PHRASE_BANK=[
 {en:'What is the value of…?',ru:'Чему равно значение…?',es:'¿Cuál es el valor de…?',ar:'ما قيمة…؟',type:'command'},
 {en:'Which expression is equivalent to…?',ru:'Какое выражение равнозначно…?',es:'¿Qué expresión es equivalente a…?',ar:'أي تعبير مكافئ لـ…؟',type:'command'},
 {en:'at least',ru:'не меньше; ≥',es:'al menos; ≥',ar:'على الأقل؛ ≥',type:'condition'},
 {en:'at most',ru:'не больше; ≤',es:'como máximo; ≤',ar:'على الأكثر؛ ≤',type:'condition'},
 {en:'increased by',ru:'увеличено на; сложение',es:'aumentado en; suma',ar:'زاد بمقدار؛ جمع',type:'operation'},
 {en:'decreased by',ru:'уменьшено на; вычитание',es:'disminuido en; resta',ar:'نقص بمقدار؛ طرح',type:'operation'},
 {en:'of',ru:'от; часто умножение',es:'de; a menudo multiplicación',ar:'من؛ غالبًا ضرب',type:'operation'},
 {en:'per',ru:'за одну единицу; деление',es:'por unidad; división',ar:'لكل وحدة؛ قسمة',type:'operation'},
 {en:'mean',ru:'среднее арифметическое',es:'media aritmética',ar:'المتوسط الحسابي',type:'data'},
 {en:'median',ru:'медиана; среднее по порядку значение',es:'mediana; valor central',ar:'الوسيط؛ القيمة الوسطى',type:'data'},
 {en:'rate of change',ru:'скорость изменения',es:'tasa de cambio',ar:'معدل التغيّر',type:'data'},
 {en:'slope',ru:'наклон прямой',es:'pendiente de una recta',ar:'ميل المستقيم',type:'algebra'},
 {en:'solution',ru:'решение уравнения',es:'solución de una ecuación',ar:'حل المعادلة',type:'algebra'},
 {en:'intercept',ru:'точка пересечения с осью',es:'intersección con un eje',ar:'نقطة التقاطع مع المحور',type:'algebra'},
 {en:'area',ru:'площадь',es:'área',ar:'المساحة',type:'geometry'},
 {en:'perimeter',ru:'периметр',es:'perímetro',ar:'المحيط',type:'geometry'},
 {en:'hypotenuse',ru:'гипотенуза',es:'hipotenusa',ar:'الوتر',type:'geometry'},
 {en:'radius',ru:'радиус',es:'radio',ar:'نصف القطر',type:'geometry'}
];
