import styles from "./deliveryInfo.module.scss";

export default function DeliveruInfo() {
    return (
        <article className={styles.deliveryInfo}>
            <div className={styles.deliveryCard}>
                <div className={styles.title}>
                    <h2>1. Транспортная компания</h2>
                    <p>Мы сотрудничаем со многими транспортными компаниями</p>
                </div>
                <ul>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.deliveryCard}>
                    <h2>2. Почта России</h2>
                    <p>
                        Отправка целесообразна, если в Вашем населенном пункте нет терминалов
                        транспортных компаний или Вы хотите получить заказ в ближайшем к Вам
                        почтовом отделении.
                    </p>
                </div>
                <div className={styles.deliveryCard}>
                    <h2>3. Самовывоз</h2>
                    <p>Бесплатно</p>
                </div>
                <div className={styles.deliveryCard}>
                    <h2>4. Доставка по г. Ижевску</h2>
                    <p>Бесплатно</p>
                </div>
                <div className={styles.deliveryCard}>
                    <h2>5. Любой другой способ</h2>
                    <p>
                        Мы отправляли грузы с попутными фурами и поездами, может быть Вы знаете
                        удобный Вам, но неизвестный нам способ доставки.
                    </p>
                </div>
            </div>
            <div className={styles.payInfoContainer}>
                <h2>Мы принимаем оплату следующими способами:</h2>
                <ul>
                    <li>🟧 Оплата на р/с предприятия по счету на оплату</li>
                    <li>🟧 Почтовый перевод</li>
                    <li>
                        🟧 Перевод на банковскую карту (Сбербанк, Альфа-Банк, АК Барс Банк, Тинькофф
                        Банк)
                    </li>
                    <li>🟧 Оплата банковской картой на сайте</li>
                    <li>🟧 Наличными в офисе</li>
                    <li>🟧 Наложенным платежом через Почту России</li>
                    <li>🟧 Наложенным платежом через транспортные компании</li>
                </ul>
                <h3>Описание процесса передачи данных</h3>
                <p>
                    После оформления Вами заказа, наш менеджер свяжется с Вами для проверки заказа.
                    Он ответит на Ваши вопросы, уточнит детали доставки и оплаты. Далее, при оплате
                    банковской картой, Вы будете перенаправлены на страницу авторизационного
                    сервера, где Вам будет предложено ввести данные пластиковой карты, инициировать
                    ее авторизацию, после чего вернуться в наш магазин кнопкой «Вернуться в
                    магазин». После того, как Вы возвращаетесь в наш магазин, система уведомит Вас о
                    результатах авторизации. В случае подтверждения авторизации Ваш заказ будет
                    автоматически выполняться в соответствии с заданными Вами условиями. В случае
                    отказа в авторизации карты Вы сможете повторить процедуру оплаты.
                </p>
                <h3>
                    Оплата банковскими картами осуществляется после проверки заказа менеджером
                    интернет-магазина.
                </h3>
                <h3>Оплата по банковским картам VISA</h3>
                <p>
                    К оплате принимаются все виды платежных карточек VISA, за исключением Visa
                    Electron. В большинстве случаев карта Visa Electron не применима для оплаты
                    через интернет, за исключением карт, выпущенных отдельными банками. О
                    возможность оплаты картой Visa Electron вам нужно выяснять у банка-эмитента
                    вашей карты.
                </p>
                <h3>Оплата по кредитным картам MasterCard</h3>
                <p>На сайте к оплате принимаются все виды MasterCard, за исключением Maestro.</p>
                <p>
                    Если на вашей карте код CVC / CVV отсутствует, то, возможно, карта не пригодна
                    для CNP транзакций (т.е. таких транзакций, при которых сама карта не
                    присутствует, а используются её реквизиты), и вам следует обратиться в банк для
                    получения подробной информации
                </p>
                <h3>ОПЛАТА ЗАКАЗОВ БАНКОВСКИМИ КАРТАМИ СБЕРБАНКА</h3>
                <p>
                    По кнопке «Перейти на сайт платежной системы СБЕРБАНК» Вы будете перенаправлены
                    на платежный шлюз ОАО «Сбербанк России», где Вы сможете указать реквизиты Вашей
                    банковской карты*. Соединение с платежным шлюзом и передача параметров Вашей
                    пластиковой карты осуществляется в защищенном режиме с использованием
                    128-битного протокола шифрования SSL. Если Банк-Эмитент вашей пластиковой карты
                    поддерживает технологию безопасного проведения интернет-платежейVerified By VISA
                    или MasterCard SecureCode, будьте готовы указать специальный пароль, необходимый
                    для успешной оплаты. Способы и возможность получения пароля для совершения
                    интернет-платежа Вы можете уточнить в банке, выпустившем Вашу карту. При выборе
                    формы оплаты с помощью банковской карты проведение платежа по заказу
                    производится непосредственно после подтверждения его менеджером. После
                    подтверждения заказа менеджером, Вы должны будете зайти в личный кабинет вашего
                    заказа (по 20-значному уникальному номеру заказа, полученному при оформлении) и
                    нажать на кнопку «Оплата банковской картой», при этом система переведёт Вас на
                    страницу авторизационного сервера Сбербанка, где Вам будет предложено ввести
                    данные пластиковой карты, инициировать ее авторизацию, после чего вы сможете
                    вернуться в наш магазин кликом по кнопке «Вернуться в магазин». После
                    возвращения в наш магазин, система уведомит Вас о результатах авторизации. На
                    оформление платежа Сбербанком выделяется 20 минут, поэтому, пожалуйста,
                    приготовьте Вашу пластиковую карту заранее. Если Вам не хватит выделенного на
                    оплату времени или в случае отказа в авторизации карты Вы сможете повторить
                    процедуру оплаты. *Конфиденциальность сообщаемой персональной информации
                    обеспечивается ОАО «Сбербанк России». Введенная информация не будет
                    предоставлена третьим лицам за исключением случаев, предусмотренных
                    законодательством РФ. Проведение платежей по банковским картам осуществляется в
                    строгом соответствии с требованиями платежных систем Visa Int. и MasterCard
                    Europe Sprl.
                </p>
                <h3>Отмена заказа</h3>
                <p>
                    При удалении товаров из оплаченного заказа или при аннулировании заказа целиком
                    Вы можете заказать другой товар на такую же сумму, либо полностью вернуть всю
                    сумму на карту с помощью Вашего менеджера.
                </p>
            </div>
        </article>
    );
}
