import React from "react";
import s from "./info.module.scss";
const Info = () => {
  return (
    <div className={s.info} id="about_us">
      <div className="container">
        <div className={s.info_title}>
          <h2 className={s.title_text}>
            Добро пожаловать на наш сайт "AgroGreen"! Наши семена - это ваш путь
            к богатому урожаю и прекрасному саду. Мы специализируемся на
            предоставлении высококачественных семян для различных культурных
            растений, цветов и овощей, которые помогут вам создать прекрасный
            сад или огород. Почему выбирают нас:
          </h2>
          <div className={s.title_info}>
            <p>
              1. Широкий ассортимент:
              <span>
                Мы предлагаем широкий выбор семян различных видов и сортов,
                позволяющий подобрать именно то, что соответствует вашим
                потребностям и предпочтениям. Независимо от того, хотите ли вы
                вырастить свои собственные овощи или украсить сад множеством
                красочных цветов, у нас есть все, что вам нужно.
              </span>
            </p>
            <p>
              2. Качество:
              <span>
                Мы гордимся тем, что предоставляем только самые качественные
                семена, которые гарантированно дадут отличные результаты. Все
                наши семена тщательно отбираются и тестируются, чтобы обеспечить
                высокую всхожесть и устойчивость к болезням.
              </span>
            </p>
            <p>
              3. Экспертные советы:
              <span>
                Наша команда экспертов всегда готова помочь вам с советами и
                рекомендациями по посадке, уходу за растениями и решению
                возможных проблем.Так что обращайтесь и мы поможем вам
              </span>
            </p>
            <p>
              4. Быстрая доставка:
              <span>
                Мы ценим ваше время, поэтому стремимся осуществлять быструю
                обработку и доставку заказов, чтобы вы могли приступить к
                выращиванию своих растений как можно скорее.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
