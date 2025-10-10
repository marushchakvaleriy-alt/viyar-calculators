// Централізована бібліотека поінтів для всіх калькуляторів
// Дані зберігаються тут і можуть редагуватися через налаштування

let calculatorSettings = {
    "password": {
        "value": "1111",
        "label": "Пароль для налаштувань"
    },
    "wardrobe": {
        "p_wardrobe_forma_pryama": {
            "value": 19,
            "label": "Форма шафи - Пряма"
        },
        "p_wardrobe_forma_g": {
            "value": 23,
            "label": "Форма шафи - Г-подібна"
        },
        "p_wardrobe_forma_g_eng": {
            "value": 31,
            "label": "Форма шафи - G-подібна"
        },
        "p_wardrobe_forma_p": {
            "value": 27,
            "label": "Форма шафи - П-подібна"
        },
        "p_wardrobe_installation_builtin": {
            "value": 3,
            "label": "Тип встановлення - Вбудована"
        },
        "p_wardrobe_installation_standalone": {
            "value": 1,
            "label": "Тип встановлення - Окремостояча"
        },
        "p_wardrobe_installation_suspended": {
            "value": 25,
            "label": "Тип встановлення - Шафа підвісна"
        },
        "p_wardrobe_zamir_none": {
            "value": 1,
            "label": "Заміри - Без замірів"
        },
        "p_wardrobe_zamir_3d": {
            "value": 8,
            "label": "Заміри - По замірам 3D"
        },
        "p_wardrobe_zamir_photo": {
            "value": 12,
            "label": "Заміри - По замірам фото-ескіз"
        },
        "p_wardrobe_geo": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_wardrobe_attic": {
            "value": 18,
            "label": "Мансардна шафа"
        },
        "p_wardrobe_mat_corpus": {
            "value": 3,
            "label": "Матеріал корпусу"
        },
        "p_wardrobe_mat_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_wardrobe_sections": {
            "value": 2,
            "label": "Довжина шафи м/п"
        },
        "p_wardrobe_facade_dsp_mat": {
            "value": 2,
            "label": "ДСП мат.корпусу"
        },
        "p_wardrobe_facade_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_wardrobe_facade_mdf": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_wardrobe_facade_paint_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_wardrobe_facade_paint_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_wardrobe_facade_veneer_straight": {
            "value": 10,
            "label": "Шпоновані 'прямі'"
        },
        "p_wardrobe_facade_veneer_milled": {
            "value": 14,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_wardrobe_facade_alum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_wardrobe_facade_arpa": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_wardrobe_facade_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_wardrobe_facade_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_wardrobe_facade_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_wardrobe_facade_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_wardrobe_facade_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_wardrobe_facade_none": {
            "value": 0,
            "label": "Без фасадів"
        },
        "p_wardrobe_swing_facades": {
            "value": 1,
            "label": "Фасади роспашні"
        },
        "p_wardrobe_furn_sliding_bottom": {
            "value": 6,
            "label": "Розсувні с-ми (нижньоопорні)"
        },
        "p_wardrobe_furn_sliding_top": {
            "value": 12,
            "label": "Розсувні с-ми (верхньопідвісні)"
        },
        "p_wardrobe_furn_wingline": {
            "value": 12,
            "label": "Складна система WingLine"
        },
        "p_wardrobe_furn_doors": {
            "value": 24,
            "label": "Системи розсувних дверей (Revego, Hawa, Salice)"
        },
        "p_wardrobe_furn_slide": {
            "value": 6,
            "label": "Розсувні с-ми (типу slide М)"
        },
        "p_wardrobe_false_hor": {
            "value": 3,
            "label": "Фальш горизонтальні"
        },
        "p_wardrobe_false_ver": {
            "value": 1,
            "label": "Фальш вертикальні"
        },
        "p_wardrobe_false_rnd": {
            "value": 15,
            "label": "Деталь R&D, гнутий елемент тощо"
        },
        "p_wardrobe_metal_frame": {
            "value": 6,
            "label": "Металоконструкція рамкова"
        },
        "p_wardrobe_metal_volume": {
            "value": 12,
            "label": "Металоконструкція об'ємна"
        },
        "p_wardrobe_furn_drawers": {
            "value": 1,
            "label": "Ящики"
        },
        "p_wardrobe_furn_lifts": {
            "value": 2,
            "label": "Підійомні механізми"
        },
        "p_wardrobe_furn_accessories": {
            "value": 3,
            "label": "Аксесуари до шафи"
        },
        "p_wardrobe_furn_hanging_rods": {
            "value": 1,
            "label": "Штанги для одягу"
        },
        "p_wardrobe_furn_bar_mechanisms": {
            "value": 2,
            "label": "Барні механізми"
        },
        "p_wardrobe_handle_gola_low": {
            "value": 3,
            "label": "GOLA"
        },
        "p_wardrobe_handle_end": {
            "value": 7,
            "label": "Торцеві"
        },
        "p_wardrobe_handle_milled": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_wardrobe_handle_other": {
            "value": 3,
            "label": "Інші, накладні тощо"
        },
        "p_wardrobe_light_mod": {
            "value": 2,
            "label": "К-сть елементів (деталей) з підсвіткою"
        },
        "p_wardrobe_light_work": {
            "value": 3,
            "label": "К-сть пристроїв керування"
        },
        "p_wardrobe_tech_hatch": {
            "value": 6,
            "label": "Люк технічний (ревізійний, електро тощо)"
        },
        "p_wardrobe_tech_appliance": {
            "value": 4,
            "label": "Техніка (пралка, сушка, сейф, винна шафа тощо)"
        }
    },
    "kitchen": {
        "p_kitchen_forma_pryama": {
            "value": 1000,
            "label": "Форма кухні - Пряма"
        },
        "p_kitchen_forma_g": {
            "value": 37,
            "label": "Форма кухні - Г-подібна"
        },
        "p_kitchen_forma_g_eng": {
            "value": 45,
            "label": "Форма кухні - G-подібна"
        },
        "p_kitchen_forma_p": {
            "value": 41,
            "label": "Форма кухні - П-подібна"
        },
        "p_kitchen_geo": {
            "value": 6,
            "label": "Нестандартна геометрія"
        },
        "p_kitchen_vent": {
            "value": 8,
            "label": "Вентмагістраль"
        },
        "p_kitchen_bez_zamiriv": {
            "value": 3,
            "label": "Без замірів"
        },
        "p_kitchen_zamir_3d": {
            "value": 15,
            "label": "По замірам 3D"
        },
        "p_kitchen_zamir_foto": {
            "value": 21,
            "label": "По замірам фото-ескіз"
        },
        "p_kitchen_island": {
            "value": 6,
            "label": "Острів"
        },
        "p_kitchen_mat_corpus": {
            "value": 3,
            "label": "Матеріал корпусу"
        },
        "p_kitchen_mat_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_kitchen_facade_dsp_mat": {
            "value": 2,
            "label": "ДСП мат.корпусу"
        },
        "p_kitchen_facade_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_kitchen_facade_mdf": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_kitchen_facade_paint_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_kitchen_facade_paint_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_kitchen_facade_veneer_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_kitchen_facade_veneer_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_kitchen_facade_alum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_kitchen_facade_arpa": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_kitchen_facade_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_kitchen_facade_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_kitchen_facade_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_kitchen_facade_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_kitchen_facade_texture": {
            "value": 6,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_kitchen_tabletop_dsp_mdf": {
            "value": 6,
            "label": "ДСП-МДФ"
        },
        "p_kitchen_tabletop_ceramic": {
            "value": 18,
            "label": "Керамограніт-Кварц"
        },
        "p_kitchen_tabletop_hpl": {
            "value": 10,
            "label": "HPL"
        },
        "p_kitchen_tabletop_acryl": {
            "value": 18,
            "label": "Акрил"
        },
        "p_kitchen_tabletop_rd": {
            "value": 23,
            "label": "R&D (дерево-метал)"
        },
        "p_kitchen_tabletop_form_straight": {
            "value": 1,
            "label": "Форма стільниці - Прямий"
        },
        "p_kitchen_tabletop_form_g": {
            "value": 3,
            "label": "Форма стільниці - Г-подібний"
        },
        "p_kitchen_tabletop_form_p": {
            "value": 5,
            "label": "Форма стільниці - П-подібний"
        },
        "p_kitchen_tabletop_drop": {
            "value": 2,
            "label": "Опуски стільниці"
        },
        "p_kitchen_fartukh_dsp_mdf": {
            "value": 3,
            "label": "ДСП-МДФ"
        },
        "p_kitchen_fartukh_ceramic": {
            "value": 6,
            "label": "Керамограніт-Кварц"
        },
        "p_kitchen_fartukh_hpl": {
            "value": 6,
            "label": "HPL"
        },
        "p_kitchen_fartukh_acryl": {
            "value": 6,
            "label": "Акрил"
        },
        "p_kitchen_fartukh_glass": {
            "value": 10,
            "label": "Скло"
        },
        "p_kitchen_fartukh_rd": {
            "value": 15,
            "label": "R&D (дерево-метал)"
        },
        "p_kitchen_mod_low": {
            "value": 2,
            "label": "Нижні модулі"
        },
        "p_kitchen_mod_up": {
            "value": 1,
            "label": "Верхні модулі"
        },
        "p_kitchen_mod_ant": {
            "value": 1,
            "label": "Антресолі"
        },
        "p_kitchen_mod_penal": {
            "value": 2,
            "label": "Пенали"
        },
        "p_kitchen_false_hor": {
            "value": 3,
            "label": "Фальш горизонтальні"
        },
        "p_kitchen_false_ver": {
            "value": 1,
            "label": "Фальш вертикальні"
        },
        "p_kitchen_detail_rd": {
            "value": 15,
            "label": "Деталь R&D, гнутий елемент тощо"
        },
        "p_kitchen_metal_frame": {
            "value": 6,
            "label": "Металоконструкція рамкова"
        },
        "p_kitchen_metal_volume": {
            "value": 12,
            "label": "Металоконструкція об'ємна"
        },
        "p_kitchen_furn_drawers": {
            "value": 1,
            "label": "Ящики"
        },
        "p_kitchen_furn_lifts": {
            "value": 2,
            "label": "Підійомні механізми"
        },
        "p_kitchen_furn_cargo": {
            "value": 1,
            "label": "Карго/сушка/смітник"
        },
        "p_kitchen_furn_magic": {
            "value": 4,
            "label": "Магічний кут"
        },
        "p_kitchen_furn_servo": {
            "value": 6,
            "label": "Servo-Drive"
        },
        "p_kitchen_furn_console": {
            "value": 2,
            "label": "Консольні полиці"
        },
        "p_kitchen_furn_top": {
            "value": 4,
            "label": "Верхні шухляди"
        },
        "p_kitchen_furn_doors": {
            "value": 24,
            "label": "Системи розсувних дверей"
        },
        "p_kitchen_furn_slide": {
            "value": 6,
            "label": "Slide M"
        },
        "p_kitchen_handle_gola_low": {
            "value": 6,
            "label": "GOLA низ"
        },
        "p_kitchen_handle_gola_up": {
            "value": 6,
            "label": "GOLA верх"
        },
        "p_kitchen_handle_gola_vert": {
            "value": 6,
            "label": "GOLA вертикал."
        },
        "p_kitchen_handle_end": {
            "value": 7,
            "label": "Торцеві"
        },
        "p_kitchen_handle_milled": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_kitchen_handle_other": {
            "value": 4,
            "label": "Інші, накладні тощо"
        },
        "p_kitchen_light_mod": {
            "value": 4,
            "label": "К-сть модулів з підсвіткою"
        },
        "p_kitchen_light_work": {
            "value": 6,
            "label": "Підсвітка робочої зони"
        },
        "p_kitchen_light_base": {
            "value": 5,
            "label": "Підсвітка цоколя"
        },
        "p_kitchen_light_other": {
            "value": 5,
            "label": "Інше (окремий модуль підсвітки)"
        },
        "p_kitchen_appliance": {
            "value": 6,
            "label": "Вбудована техніка"
        }
    },
    "wardrobeSystems": {
        "p_wardrobe_systems_product_стелажна_с-ма": {
            "value": 1000,
            "label": "Стелажна с-ма ( к-сть вертикальних секцій/модулів)"
        },
        "p_wardrobe_systems_product_пристінна_с-ма": {
            "value": 4,
            "label": "Пристінна с-ма ( к-сть вертикальних секцій/модулів)"
        },
        "p_wardrobe_systems_shape_straight": {
            "value": 1,
            "label": "Пряма"
        },
        "p_wardrobe_systems_shape_corner": {
            "value": 3,
            "label": "Кутова"
        },
        "p_wardrobe_systems_shape_u": {
            "value": 5,
            "label": "П-подібна"
        },
        "p_wardrobe_systems_shape_g": {
            "value": 8,
            "label": "G-по периметру"
        },
        "p_wardrobe_systems_measure_no": {
            "value": 1,
            "label": "Без замірів"
        },
        "p_wardrobe_systems_measure_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_wardrobe_systems_measure_photo": {
            "value": 12,
            "label": "По замірам фото-ескіз"
        },
        "p_wardrobe_systems_geometry": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_wardrobe_systems_corpus": {
            "value": 3,
            "label": "Матеріал корпусу (шт.)"
        },
        "p_wardrobe_systems_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_wardrobe_systems_material_dsp_mat_corpus": {
            "value": 2,
            "label": "ДСП мат. корпусу"
        },
        "p_wardrobe_systems_material_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_wardrobe_systems_material_mdf_boards": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_wardrobe_systems_material_paint_film_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_wardrobe_systems_material_paint_film_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_wardrobe_systems_material_veneered_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_wardrobe_systems_material_veneered_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_wardrobe_systems_material_aluminum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_wardrobe_systems_material_arpa_fenix": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_wardrobe_systems_material_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_wardrobe_systems_material_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_wardrobe_systems_material_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_wardrobe_systems_material_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_wardrobe_systems_material_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_wardrobe_systems_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_wardrobe_systems_handle_end": {
            "value": 7,
            "label": "Торцеві"
        },
        "p_wardrobe_systems_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_wardrobe_systems_handle_other": {
            "value": 4,
            "label": "Інші, накладні тощо"
        }
    },
    "wallPanels": {
        "p_wall_panels_product_стінові_панелі": {
            "value": 1000,
            "label": "Стінові панелі"
        },
        "p_wall_panels_product_стельові_панелі": {
            "value": 2,
            "label": "Стельові панелі"
        },
        "p_wall_panels_product_колони": {
            "value": 3,
            "label": "Колони"
        },
        "p_wall_panels_product_панелі_до_стелі": {
            "value": 2,
            "label": "Панелі до стелі"
        },
        "p_wall_panels_product_перегородки_рейкові": {
            "value": 4,
            "label": "Перегородки рейкові"
        },
        "p_wall_panels_shape_straight": {
            "value": 1,
            "label": "Пряма"
        },
        "p_wall_panels_shape_corner": {
            "value": 3,
            "label": "Кутова"
        },
        "p_wall_panels_shape_u": {
            "value": 5,
            "label": "П-подібна"
        },
        "p_wall_panels_shape_g": {
            "value": 8,
            "label": "G-по периметру"
        },
        "p_wall_panels_measure_no": {
            "value": 1,
            "label": "Без замірів"
        },
        "p_wall_panels_measure_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_wall_panels_measure_photo": {
            "value": 12,
            "label": "По замірам фото-ескіз"
        },
        "p_wall_panels_geometry": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_wall_panels_construction_solid": {
            "value": 1,
            "label": "Суцільні"
        },
        "p_wall_panels_construction_framed": {
            "value": 2,
            "label": "Каркасні"
        },
        "p_wall_panels_construction_profiled": {
            "value": 3,
            "label": "Профільні панелі (AGT)"
        },
        "p_wall_panels_construction_slatted": {
            "value": 2,
            "label": "Рейкові"
        },
        "p_wall_panels_construction_modular": {
            "value": 4,
            "label": "Модульні"
        },
        "p_wall_panels_construction_individual_simple": {
            "value": 8,
            "label": "Панель індивідуальна R&D - Просте"
        },
        "p_wall_panels_construction_individual_complex": {
            "value": 12,
            "label": "Панель індивідуальна R&D - Складне"
        },
        "p_wall_panels_construction_individual_development": {
            "value": 20,
            "label": "Панель індивідуальна R&D - Розробка нового"
        },
        "p_wall_panels_material_dsp_mat_corpus": {
            "value": 2,
            "label": "ДСП мат. корпусу"
        },
        "p_wall_panels_material_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_wall_panels_material_mdf_boards": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_wall_panels_material_paint_film_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_wall_panels_material_paint_film_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_wall_panels_material_veneered_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_wall_panels_material_veneered_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_wall_panels_material_aluminum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_wall_panels_material_arpa_fenix": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_wall_panels_material_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_wall_panels_material_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_wall_panels_material_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_wall_panels_material_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_wall_panels_material_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_wall_panels_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_wall_panels_handle_end": {
            "value": 7,
            "label": "Торцеві"
        },
        "p_wall_panels_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_wall_panels_handle_other": {
            "value": 4,
            "label": "Інші, накладні тощо"
        }
    },
    "otherFurniture": {
        "p_other_product_підлогова_меблева_конструкція": {
            "value": 1,
            "label": "Підлогова меблева конструкція"
        },
        "p_other_product_підвісна_меблева_конструкція": {
            "value": 4,
            "label": "Підвісна меблева конструкція"
        },
        "p_other_product_тумба_в_санвузол_з_рукомийником": {
            "value": 8,
            "label": "Тумба в санвузол (з рукомийником)"
        },
        "p_other_product_тумба_над_інсталяцією": {
            "value": 4,
            "label": "Тумба над інсталяцією"
        },
        "p_other_product_елементи_стінових_панелей_прямих_як_елемент_конструкції": {
            "value": 6,
            "label": "Елементи стінових панелей прямих"
        },
        "p_other_product_елементи_стінових_панелей_рейкових_як_елемент_конструкції": {
            "value": 12,
            "label": "Елементи стінових панелей рейкових"
        },
        "p_other_product_елементи_стінових_панелей_нестандартної_форми_як_елемент_конструкції": {
            "value": 15,
            "label": "Елементи стінових панелей нестандартної форми"
        },
        "p_other_installation_standalone": {
            "value": 1,
            "label": "Окремо стоячі меблі"
        },
        "p_other_installation_built_in": {
            "value": 6,
            "label": "Вбудовані меблі"
        },
        "p_other_measure_no": {
            "value": 1,
            "label": "Без замірів"
        },
        "p_other_measure_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_other_measure_photo": {
            "value": 12,
            "label": "По замірам фото-ескіз"
        },
        "p_other_geometry": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_other_corpus": {
            "value": 3,
            "label": "Матеріал корпусу (шт.)"
        },
        "p_other_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_other_material_dsp_mat_corpus": {
            "value": 2,
            "label": "ДСП мат. корпусу"
        },
        "p_other_material_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_other_material_mdf_boards": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_other_material_paint_film_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_other_material_paint_film_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_other_material_veneered_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_other_material_veneered_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_other_material_aluminum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_other_material_arpa_fenix": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_other_material_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_other_material_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_other_material_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_other_material_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_other_material_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_other_countertop_dsp_mdf": {
            "value": 3,
            "label": "ДСП-МДФ"
        },
        "p_other_countertop_ceramic": {
            "value": 6,
            "label": "Керамограніт-Кварц"
        },
        "p_other_countertop_hpl": {
            "value": 5,
            "label": "HPL"
        },
        "p_other_countertop_acryl": {
            "value": 10,
            "label": "Акрил"
        },
        "p_other_countertop_rd": {
            "value": 18,
            "label": "R&D (дерево-метал)"
        },
        "p_other_countertop_shape_straight": {
            "value": 1,
            "label": "Форма стільниці - Прямий"
        },
        "p_other_countertop_shape_g": {
            "value": 3,
            "label": "Форма стільниці - Г-подібний"
        },
        "p_other_countertop_shape_p": {
            "value": 5,
            "label": "Форма стільниці - П-подібний"
        },
        "p_other_countertop_drops": {
            "value": 2,
            "label": "Наявність опусків"
        },
        "p_other_sections": {
            "value": 2,
            "label": "Кількість проємів (секцій)"
        },
        "p_other_swing_facades": {
            "value": 3,
            "label": "Фасади роспашні"
        },
        "p_other_sliding_facades": {
            "value": 4,
            "label": "Фасади розсувні"
        },
        "p_other_element_metal_frame": {
            "value": 6,
            "label": "Металоконструкція рамкова"
        },
        "p_other_element_metal_volume": {
            "value": 12,
            "label": "Металоконструкція об'ємна"
        },
        "p_other_element_rd_detail": {
            "value": 15,
            "label": "Деталь R&D, гнутий елемент тощо"
        },
        "p_other_element_false_horizontal": {
            "value": 1,
            "label": "Фальш панелі горизонтальні"
        },
        "p_other_element_false_vertical": {
            "value": 1,
            "label": "Фальш панелі вертикальні"
        },
        "p_other_furn_drawers": {
            "value": 1,
            "label": "Ящики"
        },
        "p_other_furn_lifts": {
            "value": 2,
            "label": "Підйомні механізми"
        },
        "p_other_furn_bar": {
            "value": 2,
            "label": "Барні механізми"
        },
        "p_other_furn_accessories": {
            "value": 3,
            "label": "Аксесуари до шафи"
        },
        "p_other_furn_rods": {
            "value": 1,
            "label": "К-сть штанг для одягу"
        },
        "p_other_furn_sliding_bottom": {
            "value": 6,
            "label": "Розсувні с-ми (нижньоопорні)"
        },
        "p_other_furn_wingline": {
            "value": 12,
            "label": "Складна система WingLine"
        },
        "p_other_furn_doors": {
            "value": 24,
            "label": "Системи розсувних дверей (Revego, Hawa, Salice)"
        },
        "p_other_furn_slide_m": {
            "value": 6,
            "label": "Розсувні с-ми (типу slide М)"
        },
        "p_other_appliances_hatch": {
            "value": 6,
            "label": "Люк технічний інші комунікації"
        },
        "p_other_appliances_sink": {
            "value": 6,
            "label": "Рукомийник"
        },
        "p_other_appliances_fireplace": {
            "value": 30,
            "label": "Каміни"
        },
        "p_other_appliances_other": {
            "value": 8,
            "label": "Техніка (пралка, сушка, бойлер тощо)"
        },
        "p_other_handle_gola_low": {
            "value": 6,
            "label": "GOLA низ"
        },
        "p_other_handle_gola_up": {
            "value": 6,
            "label": "GOLA верх"
        },
        "p_other_handle_gola_vert": {
            "value": 6,
            "label": "GOLA вертикал."
        },
        "p_other_handle_end": {
            "value": 7,
            "label": "Торцеві"
        },
        "p_other_handle_milled": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_other_handle_other": {
            "value": 6,
            "label": "Інші"
        },
        "p_other_lighting_light_elements": {
            "value": 2,
            "label": "Елементів (деталей) з підсвіткою"
        },
        "p_other_lighting_light_control": {
            "value": 3,
            "label": "Пристроїв керування і вимірюються в кількостях"
        }
    }
};

// Функція для отримання поточних налаштувань
function loadCalculatorSettings() {
    return calculatorSettings;
}

// Функція для отримання значення поінтів за ID
function getSettingValue(id) {
    const settings = loadCalculatorSettings();
    console.log('✅ Використовую бібліотеку налаштувань для ID:', id);
    
    // Визначаємо тип калькулятора на основі контексту
    let calcType = 'wardrobe'; // за замовчуванням
    
    // Спроба визначити тип калькулятора з URL або інших індикаторів
    if (window.location.pathname.includes('кухні') || window.location.pathname.includes('kitchen')) {
        calcType = 'kitchen';
    } else if (window.location.pathname.includes('шафи гардероби') || window.location.pathname.includes('wardrobe')) {
        calcType = 'wardrobe';
    } else if (window.location.pathname.includes('інші меблі') || window.location.pathname.includes('other')) {
        calcType = 'otherFurniture';
    } else if (window.location.pathname.includes('гардеробні системи') || window.location.pathname.includes('wardrobe-systems')) {
        calcType = 'wardrobeSystems';
    } else if (window.location.pathname.includes('стінових панелей') || window.location.pathname.includes('wall-panels')) {
        calcType = 'wallPanels';
    }
    
    console.log('🔍 Тип калькулятора:', calcType);
    
    // Шукаємо значення в налаштуваннях
    if (settings[calcType] && settings[calcType][id]) {
        console.log('✅ Знайдено значення для', id, ':', settings[calcType][id].value);
        return settings[calcType][id].value;
    }
    
    // Якщо не знайдено, шукаємо в усіх типах калькуляторів
    for (const type in settings) {
        if (settings[type][id]) {
            return settings[type][id].value;
        }
    }
    
    // Якщо все ще не знайдено, повертаємо стандартне значення
    console.warn('⚠️ Не знайдено значення для', id, ', використовую стандартне значення: 1');
    return 1;
}
