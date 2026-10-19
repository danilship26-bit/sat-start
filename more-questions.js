// Original parameterized SAT Math practice. Values are fixed so review stays stable.
(() => {
  const add=(id,q)=>{const lesson=LESSONS.find(x=>x.id===id);lesson.q.push(q);EXAM_GUIDES[id].push(q.guide)};
  const M=(en,ru,es,ar)=>T(en,ru,es,ar);
  const explain=(formula)=>M(formula,formula,formula,formula);
  const tip=(en,ru,es,ar)=>M(en,ru,es,ar);
  for(const [a,x,b] of [[2,6,5],[3,7,4],[4,5,9],[5,8,3]]){
    const n=a*x+b;
    add('equations',Q(M(`If ${a}x + ${b} = ${n}, what is the value of x?`,`Если ${a}x + ${b} = ${n}, чему равен x?`,`Si ${a}x + ${b} = ${n}, ¿cuánto vale x?`,`إذا كان ${a}x + ${b} = ${n}، فما قيمة x؟`),[],String(x),explain(`${a}x = ${n}-${b} = ${a*x}; x = ${x}.`),'value of x',tip('Solve for x, not for ax.','Найди x, а не ax.','Halla x, no ax.','أوجد x لا ax.'),tip('Subtract first, then divide.','Сначала вычти, затем раздели.','Primero resta y luego divide.','اطرح أولًا ثم اقسم.')));
  }
  for(const [items,cost,wanted] of [[3,12,5],[4,18,8],[5,35,9],[6,24,11]]){
    const price=cost/items,answer=price*wanted;
    add('ratios',Q(M(`${items} identical notebooks cost $${cost}. At the same rate, how much do ${wanted} notebooks cost?`,`${items} одинаковых тетрадей стоят $${cost}. Сколько стоят ${wanted} при той же цене?`,`${items} cuadernos cuestan $${cost}. ¿Cuánto cuestan ${wanted} al mismo precio?`,`تكلف ${items} دفاتر ${cost} دولارًا. كم تكلف ${wanted} دفاتر بالسعر نفسه؟`),[],String(answer),explain(`${cost} ÷ ${items} = ${price}; ${price} × ${wanted} = ${answer}.`),'at the same rate',tip('Keep the unit price constant.','Сохраняй цену за штуку.','Mantén el precio unitario.','أبقِ سعر الوحدة ثابتًا.'),tip('Find the price of one notebook first.','Сначала найди цену одной тетради.','Primero halla el precio de uno.','أوجد سعر دفتر واحد أولًا.')));
  }
  for(const [r,s] of [[2,7],[3,8],[4,9],[5,11]]){
    const sum=r+s,prod=r*s;
    add('quadratics',Q(M(`The equation x² − ${sum}x + ${prod} = 0 has two solutions. What is the greater solution?`,`Уравнение x² − ${sum}x + ${prod} = 0 имеет два корня. Какой больше?`,`La ecuación x² − ${sum}x + ${prod} = 0 tiene dos soluciones. ¿Cuál es la mayor?`,`للمعادلة x² − ${sum}x + ${prod} = 0 حلان. ما الحل الأكبر؟`),[String(s),String(r),String(sum),String(prod)],0,explain(`(x − ${r})(x − ${s}) = 0; greater root = ${s}.`),'greater solution',tip('Choose the larger root.','Выбери больший корень.','Elige la raíz mayor.','اختر الجذر الأكبر.'),tip('The sum of roots is not itself a root.','Сумма корней не является корнем.','La suma de raíces no es una raíz.','مجموع الجذرين ليس جذرًا.')));
  }
  for(const [start,hours] of [[3,3],[5,4],[7,3],[9,4]]){
    const value=start*2**hours;
    add('exponential',Q(M(`A quantity starts at ${start} and doubles every hour. What is its value after ${hours} hours?`,`Начальное количество — ${start}; оно удваивается каждый час. Сколько будет через ${hours} часа?`,`Una cantidad empieza en ${start} y se duplica cada hora. ¿Cuánto hay tras ${hours} horas?`,`تبدأ الكمية عند ${start} وتتضاعف كل ساعة. كم تصبح بعد ${hours} ساعات؟`),[String(value),String(start*2*hours),String(start+2*hours),String(start*hours+2)],0,explain(`${start} × 2^${hours} = ${value}.`),'doubles every hour',tip('Multiply by 2 once per hour.','Умножай на 2 каждый час.','Multiplica por 2 cada hora.','اضرب في 2 كل ساعة.'),tip('Repeated doubling is exponential, not addition.','Удвоение — степень, а не сложение.','Duplicar repetidamente es exponencial.','التضاعف المتكرر أُسي لا جمع.')));
  }
  for(const [mean,a,b,c] of [[8,4,7,9],[10,6,11,12],[12,8,13,15],[15,10,14,18]]){
    const missing=4*mean-a-b-c;
    add('data',Q(M(`The mean of four numbers is ${mean}. Three numbers are ${a}, ${b}, and ${c}. What is the fourth number?`,`Среднее четырёх чисел — ${mean}. Три из них: ${a}, ${b}, ${c}. Найди четвёртое.`,`La media de cuatro números es ${mean}. Tres son ${a}, ${b} y ${c}. ¿Cuál es el cuarto?`,`متوسط أربعة أعداد هو ${mean}. ثلاثة منها ${a} و${b} و${c}. ما العدد الرابع؟`),[],String(missing),explain(`Total = 4 × ${mean} = ${4*mean}; missing = ${4*mean} − (${a}+${b}+${c}) = ${missing}.`),'mean of four',tip('Mean equals total divided by count.','Среднее — сумма, делённая на количество.','La media es total dividido entre cantidad.','المتوسط هو المجموع مقسومًا على العدد.'),tip('Multiply the mean by four before subtracting.','Сначала умножь среднее на 4.','Multiplica la media por cuatro primero.','اضرب المتوسط في أربعة أولًا.')));
  }
  for(const [red,blue] of [[2,3],[3,5],[4,7],[5,9]]){
    const total=red+blue;
    add('probability',Q(M(`A bag has ${red} red and ${blue} blue marbles. One marble is chosen at random. What is the probability that it is red?`,`В мешке ${red} красных и ${blue} синих шариков. Какова вероятность выбрать красный?`,`Una bolsa tiene ${red} canicas rojas y ${blue} azules. ¿Probabilidad de elegir una roja?`,`في كيس ${red} كرات حمراء و${blue} زرقاء. ما احتمال اختيار كرة حمراء؟`),[`${red}/${total}`,`${blue}/${total}`,`${red}/${blue}`,`${total}/${red}`],0,explain(`P(red) = ${red}/(${red}+${blue}) = ${red}/${total}.`),'at random',tip('Favorable outcomes divided by all outcomes.','Подходящие исходы раздели на все исходы.','Casos favorables entre todos los casos.','الحالات المناسبة على جميع الحالات.'),tip('The denominator is the total number of marbles.','Знаменатель — общее число шариков.','El denominador es el total de canicas.','المقام هو العدد الكلي للكرات.')));
  }
  for(const [base,height] of [[8,5],[10,7],[12,9],[14,11]]){
    const area=base*height/2;
    add('area',Q(M(`A triangle has base ${base} and height ${height}. What is its area?`,`Основание треугольника ${base}, высота ${height}. Найди площадь.`,`Un triángulo tiene base ${base} y altura ${height}. ¿Cuál es su área?`,`قاعدة مثلث ${base} وارتفاعه ${height}. ما مساحته؟`),[],String(area),explain(`Area = ${base} × ${height} ÷ 2 = ${area}.`),'area of a triangle',tip('Use half of base times height.','Возьми половину произведения основания и высоты.','Usa la mitad de base por altura.','استخدم نصف حاصل ضرب القاعدة في الارتفاع.'),tip('Do not forget to divide by 2.','Не забудь разделить на 2.','No olvides dividir entre 2.','لا تنس القسمة على 2.')));
  }
  for(const radius of [3,4,5,6]){
    const coefficient=radius*radius;
    add('circles',Q(M(`A circle has radius ${radius}. What is its area, in terms of π?`,`Радиус окружности ${radius}. Какова площадь через π?`,`Un círculo tiene radio ${radius}. ¿Cuál es su área en términos de π?`,`نصف قطر دائرة ${radius}. ما مساحتها بدلالة π؟`),[`${coefficient}π`,`${2*radius}π`,`${radius}π`,`${2*coefficient}π`],0,explain(`A = πr² = ${coefficient}π.`),'in terms of π',tip('Leave π in the answer.','Оставь π в ответе.','Deja π en la respuesta.','اترك π في الإجابة.'),tip('Area uses radius squared; circumference does not.','Для площади нужен квадрат радиуса.','El área usa el radio al cuadrado.','المساحة تستخدم مربع نصف القطر.')));
  }
})();
