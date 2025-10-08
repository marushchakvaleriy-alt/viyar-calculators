// Централізована бібліотека поінтів для всіх калькуляторів
// Дані зберігаються тут і можуть редагуватися через налаштування

let calculatorSettings = {
    "password": {
        "value": "1111",
        "label": "Пароль для налаштувань"
    },
    "wardrobe": {
        "p_forma_pryama": {
            "value": 1000,
            "label": "Форма шафи - Пряма"
        },
        "p_forma_g": {
            "value": 23,
            "label": "Форма шафи - Г-подібна"
        },
        "p_forma_p": {
            "value": 27,
            "label": "Форма шафи - П-подібна"
        },
        "p_installation_builtin": {
            "value": 3,
            "label": "Тип встановлення - Вбудована"
        },
        "p_installation_standalone": {
            "value": 1,
            "label": "Тип встановлення - Окремостояча"
        },
        "p_installation_suspended": {
            "value": 25,
            "label": "Тип встановлення - Шафа підвісна"
        },
        "p_zamir_none": {
            "value": 1,
            "label": "Заміри - Без замірів"
        },
        "p_zamir_3d": {
            "value": 8,
            "label": "Заміри - По замірам 3D"
        },
        "p_zamir_photo": {
            "value": 12,
            "label": "Заміри - По замірам фото-ескіз"
        },
        "p_geo": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_attic": {
            "value": 18,
            "label": "Мансардна шафа"
        },
        "p_mat_corpus": {
            "value": 3,
            "label": "Матеріал корпусу"
        },
        "p_mat_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_sections": {
            "value": 2,
            "label": "Довжина шафи м/п"
        },
        "p_facade_dsp_mat": {
            "value": 2,
            "label": "ДСП мат.корпусу"
        },
        "p_facade_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_facade_mdf": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_facade_paint_straight": {
            "value": 8,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_facade_paint_milled": {
            "value": 10,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_facade_veneer_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_facade_veneer_milled": {
            "value": 14,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_facade_alum_frame": {
            "value": 16,
            "label": "Алюм. рамкові"
        },
        "p_facade_arpa": {
            "value": 18,
            "label": "ARPA/Fenix"
        },
        "p_facade_fiushin": {
            "value": 20,
            "label": "Fiushin"
        },
        "p_facade_hpl": {
            "value": 22,
            "label": "HPL"
        },
        "p_facade_rd_individual": {
            "value": 24,
            "label": "R&D фасади індивід."
        },
        "p_facade_mdf_individual": {
            "value": 26,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_facade_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_facade_none": {
            "value": 0,
            "label": "Без фасадів"
        },
        "p_swing_facades": {
            "value": 1,
            "label": "Фасади роспашні"
        },
        "p_furn_sliding_bottom": {
            "value": 6,
            "label": "Розсувні с-ми (нижньоопорні)"
        },
        "p_furn_sliding_top": {
            "value": 12,
            "label": "Розсувні с-ми (верхньопідвісні)"
        },
        "p_furn_wingline": {
            "value": 12,
            "label": "Складна система WingLine"
        },
        "p_furn_doors": {
            "value": 4,
            "label": "Системи розсувних дверей (Revego, Hawa, Salice)"
        },
        "p_furn_slide": {
            "value": 5,
            "label": "Розсувні с-ми (типу slide М)"
        },
        "p_false_hor": {
            "value": 3,
            "label": "Фальш горизонтальні"
        },
        "p_false_ver": {
            "value": 4,
            "label": "Фальш вертикальні"
        },
        "p_false_rnd": {
            "value": 15,
            "label": "Деталь R&D, гнутий елемент тощо"
        },
        "p_metal_frame": {
            "value": 8,
            "label": "Металоконструкція рамкова"
        },
        "p_metal_volume": {
            "value": 10,
            "label": "Металоконструкція об'ємна"
        },
        "p_furn_drawers": {
            "value": 2,
            "label": "Ящики"
        },
        "p_furn_lifts": {
            "value": 4,
            "label": "Підійомні механізми"
        },
        "p_furn_accessories": {
            "value": 3,
            "label": "Аксесуари до шафи"
        },
        "p_furn_hanging_rods": {
            "value": 1,
            "label": "Штанги для одягу"
        },
        "p_furn_bar_mechanisms": {
            "value": 2,
            "label": "Барні механізми"
        },
        "p_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_handle_end": {
            "value": 4,
            "label": "Торцеві"
        },
        "p_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_handle_other": {
            "value": 6,
            "label": "Інші, накладні тощо"
        },
        "p_light_mod": {
            "value": 3,
            "label": "К-сть елементів (деталей) з підсвіткою"
        },
        "p_light_work": {
            "value": 4,
            "label": "К-сть пристроїв керування"
        },
        "p_tech_hatch": {
            "value": 6,
            "label": "Люк технічний (ревізійний, електро тощо)"
        },
        "p_tech_appliance": {
            "value": 4,
            "label": "Техніка (пралка, сушка, сейф, винна шафа тощо)"
        }
    },
    "kitchen": {
        "p_forma_pryama": {
            "value": 1000,
            "label": "Форма кухні - Пряма"
        },
        "p_forma_g": {
            "value": 23,
            "label": "Форма кухні - Г-подібна"
        },
        "p_forma_p": {
            "value": 27,
            "label": "Форма кухні - П-подібна"
        },
        "p_geo": {
            "value": 8,
            "label": "Нестандартна геометрія"
        },
        "p_vent": {
            "value": 8,
            "label": "Вентмагістраль"
        },
        "p_bez_zamiriv": {
            "value": 3,
            "label": "Без замірів"
        },
        "p_zamir_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_zamir_foto": {
            "value": 21,
            "label": "По замірам фото-ескіз"
        },
        "p_island": {
            "value": 6,
            "label": "Острів"
        },
        "p_mat_corpus": {
            "value": 3,
            "label": "Матеріал корпусу"
        },
        "p_mat_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_facade_dsp_mat": {
            "value": 2,
            "label": "ДСП мат.корпусу"
        },
        "p_facade_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_facade_mdf": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_facade_paint_straight": {
            "value": 8,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_facade_paint_milled": {
            "value": 10,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_facade_veneer_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_facade_veneer_milled": {
            "value": 14,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_facade_alum_frame": {
            "value": 16,
            "label": "Алюм. рамкові"
        },
        "p_facade_arpa": {
            "value": 18,
            "label": "ARPA/Fenix"
        },
        "p_facade_fiushin": {
            "value": 20,
            "label": "Fiushin"
        },
        "p_facade_hpl": {
            "value": 22,
            "label": "HPL"
        },
        "p_facade_rd_individual": {
            "value": 24,
            "label": "R&D фасади індивід."
        },
        "p_facade_mdf_individual": {
            "value": 26,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_facade_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_tabletop_dsp_mdf": {
            "value": 4,
            "label": "ДСП-МДФ"
        },
        "p_tabletop_ceramic": {
            "value": 6,
            "label": "Керамограніт-Кварц"
        },
        "p_tabletop_hpl": {
            "value": 8,
            "label": "HPL"
        },
        "p_tabletop_acryl": {
            "value": 10,
            "label": "Акрил"
        },
        "p_tabletop_rd": {
            "value": 12,
            "label": "R&D (дерево-метал)"
        },
        "p_tabletop_form_straight": {
            "value": 2,
            "label": "Форма стільниці - Прямий"
        },
        "p_tabletop_form_g": {
            "value": 4,
            "label": "Форма стільниці - Г-подібний"
        },
        "p_tabletop_form_p": {
            "value": 6,
            "label": "Форма стільниці - П-подібний"
        },
        "p_tabletop_drop": {
            "value": 3,
            "label": "Опуски стільниці"
        },
        "p_fartukh_dsp_mdf": {
            "value": 3,
            "label": "ДСП-МДФ"
        },
        "p_fartukh_ceramic": {
            "value": 5,
            "label": "Керамограніт-Кварц"
        },
        "p_fartukh_hpl": {
            "value": 7,
            "label": "HPL"
        },
        "p_fartukh_acryl": {
            "value": 9,
            "label": "Акрил"
        },
        "p_fartukh_glass": {
            "value": 11,
            "label": "Скло"
        },
        "p_fartukh_rd": {
            "value": 13,
            "label": "R&D (дерево-метал)"
        },
        "p_mod_low": {
            "value": 2,
            "label": "Нижні модулі"
        },
        "p_mod_up": {
            "value": 3,
            "label": "Верхні модулі"
        },
        "p_mod_ant": {
            "value": 4,
            "label": "Антресолі"
        },
        "p_mod_penal": {
            "value": 5,
            "label": "Пенали"
        },
        "p_false_hor": {
            "value": 3,
            "label": "Фальш горизонтальні"
        },
        "p_false_ver": {
            "value": 4,
            "label": "Фальш вертикальні"
        },
        "p_detail_rd": {
            "value": 6,
            "label": "Деталь R&D, гнутий елемент тощо"
        },
        "p_metal_frame": {
            "value": 8,
            "label": "Металоконструкція рамкова"
        },
        "p_metal_volume": {
            "value": 10,
            "label": "Металоконструкція об'ємна"
        },
        "p_furn_drawers": {
            "value": 2,
            "label": "Ящики"
        },
        "p_furn_lifts": {
            "value": 4,
            "label": "Підійомні механізми"
        },
        "p_furn_cargo": {
            "value": 3,
            "label": "Карго/сушка/смітник"
        },
        "p_furn_magic": {
            "value": 5,
            "label": "Магічний кут"
        },
        "p_furn_servo": {
            "value": 6,
            "label": "Servo-Drive"
        },
        "p_furn_console": {
            "value": 3,
            "label": "Консольні полиці"
        },
        "p_furn_top": {
            "value": 2,
            "label": "Верхні шухляди"
        },
        "p_furn_doors": {
            "value": 4,
            "label": "Системи розсувних дверей"
        },
        "p_furn_slide": {
            "value": 5,
            "label": "Slide M"
        },
        "p_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_handle_end": {
            "value": 4,
            "label": "Торцеві"
        },
        "p_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_handle_other": {
            "value": 6,
            "label": "Інші, накладні тощо"
        },
        "p_light_mod": {
            "value": 3,
            "label": "К-сть модулів з підсвіткою"
        },
        "p_light_work": {
            "value": 4,
            "label": "Підсвітка робочої зони"
        },
        "p_light_base": {
            "value": 2,
            "label": "Підсвітка цоколя"
        },
        "p_light_other": {
            "value": 5,
            "label": "Інше (окремий модуль підсвітки)"
        },
        "p_appliance": {
            "value": 2,
            "label": "Вбудована техніка"
        }
    },
    "wardrobeSystems": {
        "p_product_стелажна_с-ма": {
            "value": 1,
            "label": "Стелажна с-ма ( к-сть вертикальних секцій/модулів)"
        },
        "p_product_пристінна_с-ма": {
            "value": 4,
            "label": "Пристінна с-ма ( к-сть вертикальних секцій/модулів)"
        },
        "p_shape_straight": {
            "value": 1,
            "label": "Пряма"
        },
        "p_shape_corner": {
            "value": 3,
            "label": "Кутова"
        },
        "p_shape_u": {
            "value": 5,
            "label": "П-подібна"
        },
        "p_shape_g": {
            "value": 8,
            "label": "G-по периметру"
        },
        "p_measure_no": {
            "value": 1,
            "label": "Без замірів"
        },
        "p_measure_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_measure_photo": {
            "value": 12,
            "label": "По замірам фото-ескіз"
        },
        "p_geometry": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_corpus": {
            "value": 3,
            "label": "Матеріал корпусу (шт.)"
        },
        "p_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_material_dsp_mat_corpus": {
            "value": 2,
            "label": "ДСП мат. корпусу"
        },
        "p_material_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_material_mdf_boards": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_material_paint_film_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_material_paint_film_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_material_veneered_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_material_veneered_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_material_aluminum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_material_arpa_fenix": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_material_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_material_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_material_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_material_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_material_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_handle_end": {
            "value": 4,
            "label": "Торцеві"
        },
        "p_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_handle_other": {
            "value": 6,
            "label": "Інші, накладні тощо"
        }
    },
    "wallPanels": {
        "p_product_стінові_панелі": {
            "value": 1,
            "label": "Стінові панелі"
        },
        "p_product_стельові_панелі": {
            "value": 2,
            "label": "Стельові панелі"
        },
        "p_product_колони": {
            "value": 3,
            "label": "Колони"
        },
        "p_product_панелі_до_стелі": {
            "value": 2,
            "label": "Панелі до стелі"
        },
        "p_product_перегородки_рейкові": {
            "value": 4,
            "label": "Перегородки рейкові"
        },
        "p_shape_straight": {
            "value": 1,
            "label": "Пряма"
        },
        "p_shape_corner": {
            "value": 3,
            "label": "Кутова"
        },
        "p_shape_u": {
            "value": 5,
            "label": "П-подібна"
        },
        "p_shape_g": {
            "value": 8,
            "label": "G-по периметру"
        },
        "p_measure_no": {
            "value": 1,
            "label": "Без замірів"
        },
        "p_measure_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_measure_photo": {
            "value": 12,
            "label": "По замірам фото-ескіз"
        },
        "p_geometry": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_construction_solid": {
            "value": 1,
            "label": "Суцільні"
        },
        "p_construction_framed": {
            "value": 2,
            "label": "Каркасні"
        },
        "p_construction_profiled": {
            "value": 3,
            "label": "Профільні панелі (AGT)"
        },
        "p_construction_slatted": {
            "value": 2,
            "label": "Рейкові"
        },
        "p_construction_modular": {
            "value": 4,
            "label": "Модульні"
        },
        "p_construction_individual_simple": {
            "value": 8,
            "label": "Панель індивідуальна R&D - Просте"
        },
        "p_construction_individual_complex": {
            "value": 12,
            "label": "Панель індивідуальна R&D - Складне"
        },
        "p_construction_individual_development": {
            "value": 20,
            "label": "Панель індивідуальна R&D - Розробка нового"
        },
        "p_material_dsp_mat_corpus": {
            "value": 2,
            "label": "ДСП мат. корпусу"
        },
        "p_material_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_material_mdf_boards": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_material_paint_film_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_material_paint_film_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_material_veneered_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_material_veneered_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_material_aluminum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_material_arpa_fenix": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_material_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_material_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_material_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_material_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_material_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_handle_end": {
            "value": 4,
            "label": "Торцеві"
        },
        "p_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_handle_other": {
            "value": 6,
            "label": "Інші, накладні тощо"
        }
    },
    "otherFurniture": {
        "p_product_підлогова_меблева_конструкція": {
            "value": 1,
            "label": "Підлогова меблева конструкція"
        },
        "p_product_підвісна_меблева_конструкція": {
            "value": 4,
            "label": "Підвісна меблева конструкція"
        },
        "p_product_тумба_в_санвузол_з_рукомийником": {
            "value": 8,
            "label": "Тумба в санвузол (з рукомийником)"
        },
        "p_product_тумба_над_інсталяцією": {
            "value": 4,
            "label": "Тумба над інсталяцією"
        },
        "p_product_елементи_стінових_панелей_прямих_як_елемент_конструкції": {
            "value": 6,
            "label": "Елементи стінових панелей прямих"
        },
        "p_product_елементи_стінових_панелей_рейкових_як_елемент_конструкції": {
            "value": 12,
            "label": "Елементи стінових панелей рейкових"
        },
        "p_product_елементи_стінових_панелей_нестандартної_форми_як_елемент_конструкції": {
            "value": 15,
            "label": "Елементи стінових панелей нестандартної форми"
        },
        "p_installation_standalone": {
            "value": 1,
            "label": "Окремо стоячі меблі"
        },
        "p_installation_built_in": {
            "value": 6,
            "label": "Вбудовані меблі"
        },
        "p_measure_no": {
            "value": 1,
            "label": "Без замірів"
        },
        "p_measure_3d": {
            "value": 8,
            "label": "По замірам 3D"
        },
        "p_measure_photo": {
            "value": 12,
            "label": "По замірам фото-ескіз"
        },
        "p_geometry": {
            "value": 8,
            "label": "Нестандартна геометрія приміщення"
        },
        "p_corpus": {
            "value": 3,
            "label": "Матеріал корпусу (шт.)"
        },
        "p_glass": {
            "value": 2,
            "label": "Скло-дзеркало"
        },
        "p_material_dsp_mat_corpus": {
            "value": 2,
            "label": "ДСП мат. корпусу"
        },
        "p_material_dsp": {
            "value": 3,
            "label": "ДСП"
        },
        "p_material_mdf_boards": {
            "value": 6,
            "label": "МДФ плити"
        },
        "p_material_paint_film_straight": {
            "value": 10,
            "label": "Фарба/плівка 'прямі'"
        },
        "p_material_paint_film_milled": {
            "value": 14,
            "label": "Фарба/плівка 'фрезеровані'"
        },
        "p_material_veneered_straight": {
            "value": 12,
            "label": "Шпоновані 'прямі'"
        },
        "p_material_veneered_milled": {
            "value": 16,
            "label": "Шпоновані 'фрезеровані'"
        },
        "p_material_aluminum_frame": {
            "value": 8,
            "label": "Алюм. рамкові"
        },
        "p_material_arpa_fenix": {
            "value": 8,
            "label": "ARPA/Fenix"
        },
        "p_material_fiushin": {
            "value": 10,
            "label": "Fiushin"
        },
        "p_material_hpl": {
            "value": 14,
            "label": "HPL"
        },
        "p_material_rd_individual": {
            "value": 30,
            "label": "R&D фасади індивід."
        },
        "p_material_mdf_individual": {
            "value": 17,
            "label": "МДФ фасади з індивідуальним фрезеруванням"
        },
        "p_material_texture": {
            "value": 3,
            "label": "Перехід текстури фасадних матеріалів"
        },
        "p_handle_gola": {
            "value": 3,
            "label": "GOLA"
        },
        "p_handle_end": {
            "value": 4,
            "label": "Торцеві"
        },
        "p_handle_fr": {
            "value": 8,
            "label": "Фрезеровані"
        },
        "p_handle_other": {
            "value": 6,
            "label": "Інші, накладні тощо"
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

// Функція для оновлення налаштувань (використовується в налаштуваннях)
function updateCalculatorSettings(newSettings) {
    calculatorSettings = newSettings;
}

// Функція для отримання копії налаштувань (для редагування)
function getCalculatorSettingsCopy() {
    return JSON.parse(JSON.stringify(calculatorSettings));
}