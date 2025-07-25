import styles from "./offerInfo.module.scss";

export default function OfferInfo() {
    return (
        <article className={styles.offerInfo}>
            <ol>
                <li>
                    <h2>1. Термины и определения.</h2>
                    <p>
                        В настоящей оферте, если контекст не требует иного, нижеприведенные термины
                        имеют следующие значения и являются ее составной неотъемлемой частью:
                    </p>
                    <ul>
                        <li>
                            Продавец — Общество с ограниченной ответственностью «Внедорожники и
                            Пикапы» («ВИП»); адрес регистрации: 426009, Удмуртская Республика, г.
                            Ижевск, переулок Спартаковский, д. 13; ИНН 1840100161; ОГРН —
                            1201800019871
                        </li>
                        <li>
                            Покупатель — Покупателем является гражданин (ка), оформившие заказ в
                            интернет-магазине на условиях Договора купли-продажи (публичной оферты
                            интернет-магазина). Интернет-магазин — официальный интернет-магазин{" "}
                            Продавца, расположенный по интернет адресу{" "}
                            {process.env.NEXT_PUBLIC_DOMEN}
                        </li>
                        <li>
                            Товар — объект соглашения сторон, перечень наименований ассортимента,
                            представленный в официальном прайс- листе Продавца.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>2. Общие положения.</h2>
                    <ul>
                        <li>
                            Настоящая публичная Оферта (в дальнейшем — Договор) является официальным
                            предложением ООО «Внедорожники и Пикапы» в адрес любого гражданина (ки),
                            обладающего дееспособностью и необходимым полномочием заключить с ООО
                            «Внедорожники и Пикапы» договор купли-продажи Товара на условиях,
                            определенных в настоящей оферте и содержит все существенные условия
                            договора.
                        </li>
                        <li>
                            Отношения в области защиты прав потребителей регулируются Гражданским
                            кодексом Российской Федерации, Законом «О защите прав потребителей» и
                            принимаемыми в соответствии с ним иными федеральными законами и
                            правовыми актами Российской Федерации.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>3. Предмет Договора и цена Товара.</h2>
                    <ul>
                        <li>
                            Продавец передает, а Покупатель принимает и оплачивает товары на
                            условиях настоящего Договора.
                        </li>
                        <li>
                            Право собственности на Заказанные Товары переходит к Покупателю с
                            момента фактической передачи Товара Покупателю и оплаты последним полной
                            стоимости Товара. Риск его случайной гибели или повреждения Товара
                            переходит к Покупателю с момента фактической передачи Товара Покупателю.
                        </li>
                        <li>Цены на Товар определяются Продавцом в одностороннем порядке.</li>
                        <li>
                            Цена товара указывается в рублях Российской Федерации, не облагается НДС
                            в соотв. с п.2 ст. 346.11 НК РФ.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>4. Момент заключения договора.</h2>
                    <ul>
                        <li>
                            Текст данного Договора является публичной офертой (в соответствии со
                            статьёй 435 и частью 2 статьи 437 Гражданского кодекса Российской
                            Федерации).
                        </li>
                        <li>
                            Акцептом настоящей оферты (договора) — оформление Покупателем заказа на
                            Товар в соответствии с условиями настоящей оферты.
                        </li>
                        <li>
                            Оформление Покупателем заказа на Товар производится через сотрудников
                            (консультантов) Продавца.
                        </li>
                        <li>
                            Договор, заключаемый на основании акцептирования Покупателем настоящей
                            оферты является договором присоединения, к которому Покупатель
                            присоединяется без каких-либо исключений и/или оговорок.
                        </li>
                        <li>
                            Факт оформления заказа Покупателем является безоговорочным фактом
                            принятия Покупателем условий данного Договора. Покупатель, приобретший
                            товар в Интернет-магазине Продавца (оформивший заказ товара),
                            рассматривается как лицо, вступившее с Продавцом в отношения на условиях
                            настоящего Договора.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>5. Права и обязанности сторон.</h2>
                    <p>Продавец обязуется:</p>
                    <ul>
                        <li>
                            С момента заключения настоящего Договора обеспечить в полной мере все
                            обязательства перед Покупателем в соответствии с условиями настоящего
                            договора и действующего законодательства.
                        </li>
                        <li>
                            Продавец оставляет за собой право невыполнения обязательств по Договору
                            в случае возникновения обстоятельств непреодолимой силы, указанных в п.8
                            настоящего Договора.
                        </li>
                    </ul>
                    <p>Продавец имеет право:</p>
                    <ul>
                        <li>
                            Изменять настоящий Договор, Цены на Товар и Тарифы на сопутствующие
                            услуги, способы и сроки оплаты и доставки товара в одностороннем
                            порядке, помещая их на страницах интернет-магазина, расположенного по
                            интернет-адресу: {process.env.NEXT_PUBLIC_DOMEN}. Все изменения вступают
                            в силу немедленно после публикации, и считаются доведенными до сведения
                            Покупателя с момента такой публикации.
                        </li>
                        <li>
                            Без согласования с Покупателем, передавать свои права и обязанности по
                            исполнению Договора третьим лицам.
                        </li>
                        <li>
                            Перед поставкой заказанного Клиентом товара Продавец имеет право
                            потребовать от Клиента 100 % предоплаты заказанного товара. Продавец
                            имеет право отказать Клиенту в доставке товара при отсутствии такой
                            оплаты.
                        </li>
                        <p>Покупатель обязуется:</p>
                        <ul>
                            <li>
                                До момента заключения Договора ознакомиться с содержанием и
                                условиями Договора, ценами на Товар, предлагаемыми Продавцом.
                            </li>
                            <li>
                                Во исполнение Продавцом своих обязательств перед Покупателем
                                последний должен сообщить все необходимые данные, однозначно
                                идентифицирующие его как покупателя, и достаточные для доставки
                                Покупателю оплаченного им Товара.
                            </li>
                            <li>Оплатить заказанный Товар на условиях настоящего договора.</li>
                            <li>Соблюдать Правила продажи.</li>
                            <p>
                                Покупатель несет ответственность за достоверность предоставленной
                                при оформлении заказа информации.
                            </p>
                        </ul>
                    </ul>
                </li>
                <li>
                    <h2>6. Доставка товара</h2>
                    <ul>
                        <li>
                            Доставка Товара Покупателю осуществляется в сроки согласованные
                            Сторонами при подтверждении заказа сотрудником Продавца и условиях
                            изложенных в Правилах продажи.
                        </li>
                        <li>
                            Общий срок доставки товара со склада, состоит из срока обработки заказа,
                            изготовления товара если нет на складе и срока доставки. Срок доставки
                            транспортной компанией зависит от расположения покупателя и уточняется
                            перед совершением заказа.
                        </li>
                        <li>
                            Доставка товара осуществляется ПОКУПАТЕЛЮ по месту его жительства или
                            иному указанному им адресу при оформлении заказа.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>7. Отзыв оферты</h2>
                    <ul>
                        <li>
                            Отзыв оферты (Договора) может быть осуществлён Продавцом в любое время,
                            но это не является основанием для отказа от обязательств Продавца по уже
                            заключённым договорам.
                        </li>
                        <li>
                            Продавец обязуется разместить уведомление об отзыве оферты, в своем
                            интернет-магазине, с указанием точного времени (4-й часовой пояс
                            (Москва)) отзыва оферты, не менее чем за 12 часов до факта наступления
                            события отзыва (приостановки) действия Оферты.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>8. Форс-мажор.</h2>
                    <ul>
                        <li>
                            Любая из Сторон освобождается от ответственности за полное или частичное
                            неисполнение своих обязательств по настоящему Договору, если это
                            неисполнение было вызвано обстоятельствами непреодолимой силы,
                            возникшими после подписания настоящего Договора. «Обстоятельства
                            Непреодолимой Силы» означают чрезвычайные события или обстоятельства,
                            которые такая Сторона не могла предвидеть или предотвратить доступными
                            ей средствами. Такие чрезвычайные события или обстоятельства включают в
                            себя, в частности: забастовки, наводнения, пожары, землетрясения и иные
                            стихийные бедствия, войны, военные действия, действия российских или
                            иностранных государственных органов, а также любые иные обстоятельства,
                            выходящие за пределы разумного контроля любой из Сторон.
                        </li>
                        <li>
                            Изменения действующего законодательства или нормативных актов, прямо или
                            косвенно влияющие на какую-либо из Сторон, не рассматриваются как
                            Обстоятельства непреодолимой силы, однако, в случае внесения таких
                            изменений, которые не позволяют любой из Сторон исполнить какие-либо из
                            ее обязательств по настоящему Договору, Стороны обязаны незамедлительно
                            принять решение относительно порядка работы по устранению этой проблемы
                            с тем, чтобы обеспечить Сторонам продолжение исполнения настоящего
                            Договора.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>9. Ответственность сторон.</h2>
                    <ul>
                        <li>
                            За неисполнение или ненадлежащее исполнение условий настоящего Договора
                            Стороны несут ответственность в соответствии с законодательством
                            Российской Федерации.
                        </li>
                        <li>
                            Вся текстовая информация и графические изображения, размещенные в
                            интернет-магазине имеют законного правообладателя, незаконное
                            использование указанной информации и изображений преследуется в
                            соответствии с действующим законодательством Российской Федерации.
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>10.Прочие условия.</h2>
                    <ul>
                        <li>
                            Все споры, связанные с неисполнением, или ненадлежащим исполнением своих
                            обязательств по настоящему договору стороны будут стараться решить в
                            ходе переговоров.
                        </li>
                        <li>
                            В случае не достижения согласия в ходе переговоров, споры будут
                            разрешаться в судебном порядке в соответствии с действующим
                            законодательством Российской Федерации.
                        </li>
                    </ul>
                </li>
            </ol>
        </article>
    );
}
