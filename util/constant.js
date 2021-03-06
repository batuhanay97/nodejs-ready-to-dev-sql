module.exports = {

    AVAILABLE_VERSIONS: ['v1'], // Available REST service versions

    ENVIRONMENT: {
        TEST: 'test',
        DEVELOPMENT: 'development',
        PRODUCTION: 'production'
    },

    LANGUAGES : ['en', 'tr'],

    DEFAULT_LANGUAGE : 'tr',

    TIMEOUT: {
        REQUEST: 10 * 1000, // in miliseconds
    },

    CONSTANT: {
        HASH_SALT: 10,
        CUSTOMER_TICKET_ID_OFFSET: 1000
    },

    PHONE_VERIFICATION: {
        CODE_LENGTH: 6,
        CODE_REQUEST_INTERVAL: 30, // in seconds
        MAX_TRIAL_COUNT: 5,
        MAX_BLOCK_COUNT: 5,
        MAX_CODE_REQUEST_COUNT: 10
    },

    CREATION_TYPE: {
        DELETE: 0,
        CREATE: 1
    },

    EXPIRATION: {
        JWT_TOKEN: 60 * 60, // in seconds
        TOKEN_IN_DATABASE: 1, // in days
    },

    // Response headers
    HEADER: {
        AUTHENTICATION: 'x-auth',
        TECHNICIAN_AUTHENTICATION: 'x-tech-auth',
        LANGUAGE: 'x-lang'
    },

    RESPONSE_STATUS: {
        FAIL: 'Fail',
        SUCCESS: 'Success'
    },

    RESPONSE_TYPE: {
        FILE: 'File'
    },

    LIMIT: {
        MIN_PASSWORD_CHAR_COUNT: 6,
        MAX_PASSWORD_CHAR_COUNT: 32,
        MAXIMUM_AVATAR_SIZE: 2 * 1024 * 1024, // in bytes
        MAXIMUM_AVATAR_SIZE_TEST: 1024, // in bytes
        MAXIMUM_IMAGE_SIZE: 2 * 1024 * 1024, // in bytes
        MAXIMUM_IMAGE_SIZE_TEST: 1024, // in bytes
        MAXIMUM_IMAGE_UPLOAD_FOR_TECHNICIAN_ARRIVE: 10,  // piece
        MAXIMUM_IMAGE_UPLOAD_FOR_TECHNICIAN_COMPLETE: 10  // piece
    },

    PAGINATION: {
        DEFAULT_TICKET_PAGE_SIZE: 10,
        MAXIMUM_TICKET_PAGE_SIZE: 50,
        DEFAULT_JOB_PAGE_SIZE: 10,
        MAXIMUM_JOB_PAGE_SIZE: 50,
        DEFAULT_OLD_JOB_PAGE_SIZE: 10,
        MAXIMUM_OLD_JOB_PAGE_SIZE: 50,
        DEFAULT_TECHNICIAN_AVATAR_REQUEST_PAGE_SIZE: 25,
        MAXIMUM_TECHNICIAN_AVATAR_REQUEST_PAGE_SIZE: 300
    },

    AZURE_CONTAINER: {
        TEST: 'test',
        AVATAR: 'avatar',
        TICKET: 'ticket'
    },

    PRIVILEGE: {
        TOW_TRUCK_COMPANY: {
            A: 'A',
            B: 'B',
            C: 'C'
        }
    },

    USER_TYPE: {
        OPERATOR: 0,
        OPERATOR_ADMIN: 40,
        SUPER_OPERATOR_ADMIN: 41,
        DEALER_ADMIN: 50,
        TOW_TRUCK_ADMIN: 60,
        SUPER_ADMIN: 100
    },

    // Errors
    ERROR: {

        AUTHENTICATION_FAILED: {
            code: 1000,
            message :{
                tr: 'L??ften sisteme giri?? yap??n',
                en: 'Please login to the system'
            }
        },
        SHORT_PASSWORD: {
            code: 1001,
            message: {
                tr: '??ifre ??ok k??sa',
                en: 'Password is too short'
            }
        },
        LONG_PASSWORD: {
            code: 1002,
            message: {
                tr: '??ifre ??ok uzun',
                en: 'Password is too long'
            }
        },
        BADLY_FORMATTED_EMAIL: {
            code: 1003,
            message: {
                tr: 'Ge??ersiz bir email adresi girdiniz',
                en: 'You entered an invalid email address'
            }
        },
        USER_ALREADY_EXISTS: {
            code: 1004,
            message: {
                tr: 'Bu kullan??c?? halihaz??rda mevcut',
                en: 'This user already exists'
            }
        },
        DEALER_NOT_FOUND: {
            code: 1005,
            message: {
                tr: 'Sat??c?? bulunamad??',
                en: 'Dealer not found'
            }
        },
        MISSING_FIELDS: {
            code: 1006,
            message: {
                tr: 'Baz?? alanlar eksik',
                en: 'Some fields are missing'
            }
        },
        USER_NOT_FOUND: {
            code: 1007,
            message: {
                tr: 'Kullan??c?? bulunamad??',
                en: 'User not found'
            }
        },
        INCORRECT_CREDENTIALS: {
            code: 1008,
            message: {
                tr: 'E-posta veya ??ifre yanl????',
                en: 'Email or password is incorrect'
            }
        },
        OWN_ACCOUNT_DELETE: {
            code: 1009,
            message: {
                tr: 'Kendi hesab??n??z?? silemessiniz',
                en: 'You cannot delete your own account'
            }
        },
        USER_NOT_IN_YOUR_COMPANY: {
            code: 1010,
            message: {
                tr: 'Bu kullan??c?? sizin ??irketinizde de??il',
                en: 'This user does not belong to your company'
            }
        },
        AUTHORIZATION_FAILED: {
            code: 1011,
            message: {
                tr: 'Bu eylem i??in yetkiniz yok',
                en: 'You are not authorized for this action'
            }
        },
        NOT_SUPER_ADMIN: {
            code: 1012,
            message: {
                tr: 'Bu kullan??c?? y??netici de??il',
                en: 'This user is not a super admin'
            }
        },
        NOT_DEALER_ADMIN: {
            code: 1013,
            message: {
                tr: 'Bu kullan??c?? bayi y??neticisi de??il',
                en:'This user is not a dealer admin'
            }
        },
        INCORRECT_URL: {
            code: 1014,
            message: {
                tr: 'Yanl???? url',
                en: 'This is an incorrect url'
            }
        },
        EMPTY_BODY: {
            code: 1015,
            message: {
                tr: 'Veri girilmemi??',
                en: 'No data provided'
            }
        },
        DELETED_USER_ALREADY_EXISTS: {
            code: 1016,
            message: {
                tr: 'Bu e-posta ile silinmi?? bir kullan??c?? mevcut',
                en: 'A deleted user already exists with this email'
            }
        },
        TOW_TRUCK_COMPANY_NOT_FOUND: {
            code: 1017,
            message: {
                tr: '??ekici ??irketi bulunamad??',
                en: 'Tow truck company not found'
            }
        },
        NOT_ADMIN_OF_DEALER: {
            code: 1018,
            message: {
                tr: 'Bu kullan??c?? belirtilen bayinin y??neticisi de??il',
                en: 'This user is not admin of the dealer'
            }
        },
        THEME_NOT_FOUND: {
            code: 1019,
            message: {
                tr: 'Tema bulunamad??',
                en: 'This theme is not found'
            }
        },
        NAME_MISSING: {
            code: 1020,
            message: {
                tr: 'L??tfen isim giriniz',
                en: 'Please provide a name'
            }
        },
        SURNAME_MISSING: {
            code: 1021,
            message: {
                tr: '',
                en: 'Please provide a surname'
            }
        },
        PASSWORD_MISSING: {
            code: 1022,
            message: {
                tr: 'L??tfen soyisim giriniz',
                en: 'Please provide a password'
            }
        },
        BAD_FORMAT_PHONE: {
            code: 1023,
            message: {
                tr: 'L??tfen do??ru bir telefon numaras?? giriniz',
                en: 'Please provide a correct phone number'
            }
        },
        TECHNICIAN_NOT_FOUND: {
            code: 1024,
            message: {
                tr: 'Teknisyen bulunamad??',
                en: 'This technician is not found'
            }
        },
        TECHNICIAN_NOT_IN_YOUR_DEALER: {
            code: 1025,
            message: {
                tr: 'Bu teknisyen senin ??irketine ba??l?? de??il',
                en:'This technician does not belong to your company'
            }
        },
        BRAND_MISSING: {
            code: 1026,
            message: {
                tr: 'L??tfen marka ismi giriniz',
                en: 'Please provide a brand name'
            }
        },
        MODEL_MISSING: {
            code: 1027,
            message: {
                tr: 'L??tfen model ismi giriniz',
                en: 'Please provide a model name'
            }
        },
        BRAND_NOT_IN_YOUR_COMPANY: {
            code: 1028,
            message: {
                tr: 'Bu marka senin ??irketine ba??l?? de??il',
                en: 'This brand does not belong to your company'
            }
        },
        BRAND_NOT_FOUND: {
            code: 1029,
            message: {
                tr: 'Bu marka bulunamad??',
                en: 'This brand is not found'
            }
        },
        MODEL_NOT_FOUND: {
            code: 1030,
            message: {
                tr: 'Bu model bulunamad??',
                en: 'This model is not found'
            }
        },
        MODEL_NOT_IN_YOUR_COMPANY: {
            code: 1031,
            message: {
                tr: 'Bu model senin ??irketine ba??l?? de??il',
                en: 'This model does not belong to your company'
            }
        },
        DEALER_CAR_ALREADY_EXIST: {
            code: 1032,
            message: {
                tr: 'Bu plakayla bir bayi arac?? zaten mevcut',
                en: 'A dealer car already exists with this plate'
            }
        },
        DEALER_CAR_NOT_FOUND: {
            code: 1033,
            message: {
                tr: 'Bu bayi arac?? bulunamad??',
                en: 'This dealer car is not found'
            }
        },
        PLATE_MISSING: {
            code: 1034,
            message: {
                tr: 'L??tfen bir plaka giriniz',
                en: 'Please provide a plate'
            }
        },
        GPS_ID_MISSING: {
            code: 1035,
            message: {
                tr: 'L??tfen bir gps numaras?? giriniz',
                en: 'Please provide a gps id'
            }
        },
        MAX_VELOCITY_MISSING: {
            code: 1036,
            message: {
                tr: 'L??tfen maximum h??z?? giriniz',
                en: 'Please provide a max velocity'
            }
        },
        DEALER_CAR_NOT_IN_YOUR_DEALER: {
            code: 1037,
            message: {
                tr: 'Bu bayi arac?? sizin bayinize ait de??il',
                en: 'This dealer car does not belong to your dealer'
            }
        },
        SHORT_NAME_MISSING: {
            code: 1038,
            message: {
                tr: 'L??tfen bir k??sa isim giriniz',
                en: 'Please provide a shortname'
            }
        },
        CITY_MISSING: {
            code: 1039,
            message: {
                tr: 'L??tfen bir ??ehir giriniz',
                en: 'Please provide a city'
            }
        },
        DISTRICT_MISSING: {
            code: 1040,
            message: {
                tr: 'L??tfen bir b??lge ismi giriniz',
                en: 'Please provide a district'
            }
        },
        ADDRESS_MISSING: {
            code: 1041,
            message: {
                tr: 'L??tfen bir adres giriniz',
                en: 'Please provide a address'
            }
        },
        LATITUDE_MISSING: {
            code: 1042,
            message: {
                tr: 'L??tfen bir enlem giriniz',
                en: 'Please provide a latitude'
            }
        },
        LONGITUDE_MISSING: {
            code: 1043,
            message: {
                tr: 'L??tfen bir boylam giriniz',
                en: 'Please provide a longitude'
            }
        },
        PRIVILEGE_MISSING: {
            code: 1044,
            message: {
                tr: 'L??tfen bir articalik giriniz',
                en: 'Please provide a previliage'
            }
        },
        TYPE_MISSING: {
            code: 1045,
            message: {
                tr: 'L??tfen bir tip giriniz',
                en: 'Please provide a type'
            }
        },
        TYPE_NOT_FOUND: {
            code: 1046,
            message: {
                tr: 'Bu tip bulunamad??',
                en: 'This type is not found'
            }
        },
        TYPE_NOT_IN_YOUR_COMPANY: {
            code: 1047,
            message: {
                tr: 'Bu tip senin ??irketine ait de??il',
                en: 'This type does not belong to your company'
            }
        },
        DEALER_NOT_IN_YOUR_COMPANY: {
            code: 1048,
            message: {
                tr: 'Bu bayi senin ??irketine ait de??il',
                en: 'This dealer does not belong to your company'
            }
        },
        DEALER_RESPONSIBLE_ALREADY_EXISTS: {
            code: 1049,
            message: {
                tr: 'Bu kullan??c?? zaten bu bayiden sorumlu',
                en: 'This user is already a responsible of this dealer'
            }
        },
        TOW_TRUCK_COMPANY_ALREADY_EXIST: {
            code: 1050,
            message: {
                tr: 'Bu isimde ??ekici ??irketi zaten mevcut',
                en: 'A tow truck company already exists with this name'
            }
        },
        TOW_TRUCK_COMPANY_NOT_IN_YOUR_COMPANY: {
            code: 1051,
            message: {
                tr: 'Bu ??eki??i ??irketi senin ??irkentine ait de??il',
                en: 'This tow truck company does not belong to your company'
            }
        },
        YEAR_MISSING: {
            code: 1052,
            message: {
                tr: 'L??tfen bir y??l giriniz',
                en: 'Please provide a year'
            }
        },
        PHONE_MISSING: {
            code: 1053,
            message: {
                tr: 'L??tfen ge??erli bir telefon numaras?? giriniz',
                en: 'Please provide a valid phone'
            }
        },
        DEALER_RESPONSIBLE_NOT_EXISTS: {
            code: 1054,
            message: {
                tr: 'Bu kullan??c?? bu bayiden sorumlu de??il',
                en: 'This user is not a responsible of the dealer'
            }
        },
        DEALER_RESPONSIBLE_NOT_IN_YOUR_COMPANY: {
            code: 1055,
            message: {
                tr: 'Bu bayi sorumlusu senin ??irketine ait de??il',
                en: 'This dealer responsible does not belong to your company'
            }
        },
        TOW_TRUCK_ALREADY_EXIST: {
            code: 1056,
            message: {
                tr: 'Bu plaka ile halihaz??rda bir ??ekici arabas?? mevcut',
                en: 'A tow truck already exists with this plate'
            }
        },
        TITLE_MISSING: {
            code: 1057,
            message: {
                tr: 'L??tfen ge??erli bir ba??l??k giriniz',
                en: 'Please provide a valid title'
            }
        },
        TOW_TRUCK_COMPANY_CONTACT_NOT_EXISTS: {
            code: 1058,
            message: {
                tr: 'Bu ba??lant?? mevcut de??il',
                en: 'This contact does not exists'
            }
        },
        TOW_TRUCK_NOT_FOUND: {
            code: 1059,
            message: {
                tr: 'Bu ??ekici bulunamad??',
                en: 'This tow truck is not found'
            }
        },
        TOW_TRUCK_NOT_IN_YOUR_COMPANY: {
            code: 1060,
            message: {
                tr: 'Bu ??ekici senin ??irketinde de??il',
                en: 'This tow truck is not in your company'
            }
        },
        DEALER_CONTACT_NOT_FOUND: {
            code: 1061,
            message: {
                tr: 'Bu ba??lant?? mevcut de??il',
                en: 'This contact does not exist'
            }
        },
        DEALER_CONTACT_NOT_IN_YOUR_DEALER: {
            code: 1062,
            message: {
                tr: 'Bu ba??lant?? senin bayine ait de??il',
                en: 'This contact does not belong to your dealer'
            }
        },
        NOT_ADMIN_OF_TOW_TRUCK_COMPANY: {
            code: 1063,
            message: {
                tr: 'Bu ??ekici ??irketinde y??netici de??ilsiniz',
                en: 'You are not an admin in this tow truck company'
            }
        },
        TOW_TRUCK_DRIVER_NOT_FOUND: {
            code: 1064,
            message: {
                tr: '??ekici ????f??r?? bulunamad??',
                en: 'Tow truck driver not found'
            }
        },
        TOW_TRUCK_DRIVER_NOT_IN_THIS_COMPANY: {
            code: 1065,
            message: {
                tr: 'Bu ??ekici ????f??r?? senin ??irketinde de??il',
                en: 'This tow truck driver is not in your company'
            }
        },
        COMPLAINT_TYPE_MISSING: {
            code: 1067,
            message: {
                tr: 'L??tfen ge??erli bir kullan??c?? tipi giriniz',
                en: 'Please provide a valid user type'
            }
        },
        COMPLAINT_EMAIL_ALREADY_EXIST: {
            code: 1068,
            message: {
                tr: 'Girilen NAF emaili zaten mevucut',
                en: 'This complaint email is already exist in company'
            }
        },
        COMPLAINT_EMAIL_NOT_FOUND: {
            code: 1069,
            message: {
                tr: 'Girilen NAF emaili bulunamad??',
                en: 'This complaint email not found'
            }
        },
        COMPLAINT_EMAIL_NOT_IN_YOUR_COMPANY: {
            code: 1070,
            message: {
                tr: 'Girilen NAF emaili bu firmaya kay??tl?? de??il',
                en: 'This complaint email is not in your company'
            }
        },
        ACTIVE_TICKET_EXISTS_FOR_THIS_PLATE: {
            code: 1071,
            message: {
                tr: 'Bu plaka i??in halihaz??rda bir kay??t mevuct',
                en: 'There is already an active ticket for this plate'
            }
        },
        VERSION_MISSING: {
            code: 1072,
            message: {
                tr: 'L??tfen ge??erli bir versiyon giriniz',
                en: 'Please provide a valid version'
            }
        },
        MOTOR_NO_MISSING: {
            code: 1073,
            message: {
                tr: 'L??tfen ge??erli bir motor numaras?? giriniz',
                en: 'Please provide a valid motor no'
            }
        },
        COLOR_MISSING: {
            code: 1074,
            message: {
                tr: 'L??tfen ge??erli bir renk giriniz',
                en: 'Please provide a valid color'
            }
        },
        CHASSIS_MISSING: {
            code: 1075,
            message: {
                tr: 'L??tfen ge??erli bir ??asi giriniz',
                en: 'Please provide a valid chassis'
            }
        },
        WARRANTY_MISSING: {
            code: 1076,
            message: {
                tr: 'L??tfen ge??erli bir garanti giriniz',
                en: 'Please provide a valid warranty'
            }
        },
        FUEL_MISSING: {
            code: 1077,
            message: {
                tr: 'L??tfen ge??erli bir yak??t tipi giriniz',
                en: 'Please provide a valid fuel type'
            }
        },
        DELIVERY_DATE_MISSING: {
            code: 1078,
            message: {
                tr: 'L??tfen ge??erli bir teslim tarihi giriniz',
                en: 'Please provide a valid delivery date'
            }
        },
        TOW_TRUCK_COMPANY_CONTACT_NOT_IN_THIS_COMPANY: {
            code: 1079,
            message: {
                tr: 'Bu ba??lant?? senin ??ekici ??irketinde de??il',
                en: 'This contact not in your tow truck company'
            }
        },
        COMPANY_CAR_FIELD_NOT_FOUND: {
            code: 1080,
            message: {
                tr: 'Bu ??irket otomobil sahas?? bulunamad??',
                en: 'This company car field not found'
            }
        },
        COMPANY_CAR_FIELD_NOT_IN_YOUR_COMPANY: {
            code: 1081,
            message: {
                tr: 'Bu ??irket otomobil sahas?? senin ??irketinde de??il',
                en: 'This company car field not in your company'
            }
        },
        COMMENT_MISSING: {
            code: 1082,
            message: {
                tr: 'L??tfen ge??erli bir a????klama giriniz',
                en: 'Please provide a valid comment'
            }
        },
        TICKET_NOT_FOUND: {
            code: 1083,
            message: {
                tr: 'B??yle bir kay??t bulunamad??',
                en: 'Ticket is not found'
            }
        },
        TICKET_NOT_IN_YOUR_COMPANY: {
            code: 1084,
            message: {
                tr: 'Bu kay??t sizin ??irketinize ait de??ildir',
                en: 'This ticket does not belong to your company'
            }
        },
        TICKET_COMPLETE: {
            code: 1085,
            message: {
                tr: 'Bu kay??t sona ermi??tir',
                en: 'This ticket is ended'
            }
        },
        TECHNICIAN_NOT_IN_YOUR_COMPANY: {
            code: 1086,
            message: {
                tr: 'Bu teknisyen sizin ??irketinize ba??l?? de??ildir',
                en: 'This technician does not belong to your company'
            }
        },
        CUSTOMER_LOCATION_NOT_UPLOADED: {
            code: 1087,
            message: {
                tr: 'M????terinin yeri hen??z y??klenmedi',
                en: 'Customer location has not been uploaded yet'
            }
        },
        TECHNICIAN_DENY_OPTION_NOT_FOUND: {
            code: 1088,
            message: {
                tr: 'B??yle bir se??enek bulunamad??',
                en: 'Option is not found'
            }
        },
        TICKET_COMMENT_NOT_FOUND: {
            code: 1089,
            message: {
                tr: 'Kay??t yorumu bulunamad??',
                en: 'Ticket comment is not found'
            }
        },
        TICKET_COMMENT_NOT_IN_YOUR_COMPANY: {
            code: 1090,
            message: {
                tr: 'Kay??t yorumu sizin ??irketinize ba??l?? de??ildir',
                en: 'Ticket comment does not belong to your company'
            }
        },
        TECHNICIAN_DENY_NOT_FOUND: {
            code: 1091,
            message: {
                tr: 'B??yle bir sebep bulunamad??',
                en: 'Deny is not found'
            }
        },
        TECHNICIAN_ALREADY_ASSIGNED_FOR_DENY: {
            code: 1092,
            message: {
                tr: 'Teknisten zaten atanmim????',
                en: 'Technician already assigned'
            }
        },
        TICKET_TECHNICIAN_INFO_NOT_FOUND: {
            code: 1093,
            message: {
                tr: 'B??yle bir teknisyen bilgisi bulunamadi',
                en: 'technician info not found'
            }
        },
        EXACTLY_ONE_PRIMARY_CONTACT: {
            code: 1094,
            message: {
                tr: 'Sadece ve sadece bir tane ileti??im ki??isi birincil olabilir',
                en: 'Exactly one contact can be primary'
            }
        },
        CONTACTS_NOT_SORTED: {
            code: 1095,
            message: {
                tr: '??leti??im ki??ileri s??ral?? de??il',
                en: 'Contacts are not sorted'
            }
        },
        DISTANCE_MATRIX_FAILED: {
            code: 1096,
            message: {
                tr: 'Tahmini s??re hesaplanamad??',
                en: 'Estimated time could not be calculated'
            }
        },
        REVERSE_GEOCODE_ERROR: {
            code: 1097,
            message: {
                tr: 'Se??ilen konuma ait bir adres Google Maps\'te bulunamad??',
                en: 'No place is found for the selected location in Google Maps\''
            }
        },
        START_DATE_MISSING: {
            code: 1098,
            message: {
                tr: 'L??tfen ge??erli bir ba??lang???? tarihi giriniz',
                en: 'Please provide a valid start date'
            }
        },
        END_DATE_MISSING: {
            code: 1098,
            message: {
                tr: 'L??tfen ge??erli bir biti?? tarihi giriniz',
                en: 'Please provide a valid end date'
            }
        },
        NO_REQUEST_FOR_TECHNICIAN_IMAGE: {
            code: 1099,
            message: {
                tr: 'Bu tehknisyen i??in bir istek bulunmamaktad??r',
                en: 'There is no request for technician image'
            }
        },
        NIGHT_DUTY_PLACE_ALREADY_EXIST: {
            code: 1100,
            message: {
                tr: 'Bu ??ehir zaten eklenmi??',
                en: 'Night duty place already exist'
            }
        },
        NIGHT_DUTY_PLACE_NOT_FOUND: {
            code: 1101,
            message: {
                tr: 'Bu ??ehir bulunmamaktad??r',
                en: 'There is no night duty place'
            }
        },
        NIGHT_DUTY_PLACE_NOT_IN_YOUR_COMPANY: {
            code: 1102,
            message: {
                tr: 'Bu ??ehir sizin ??irketinize ba??l?? de??ildir',
                en: 'Night duty place not in your country'
            }
        },
        IMAGE_UPLOAD_FAILED: {
            code: 1103,
            message: {
                tr: 'Resim y??klenirken hata olu??tu',
                en: 'Failed while uploading the image'
            }
        },
        INCORRECT_FILE_TYPE: {
            code: 1104,
            message: {
                tr: 'Ge??ersiz dosya format??',
                en: 'Invalid file format'
            }
        },
        IMAGE_TOO_LARGE: {
            code: 1105,
            message: {
                tr: 'L??tfen daha k??????k bir boyutta resim y??kleyin',
                en: 'Please upload a smaller image in size'
            }
        },
        INCORRECT_FIELD_NAME: {
            code: 1106,
            message: {
                tr: 'Hatal?? alan ad??',
                en: 'Incorrect field name'
            }
        },
        INCORRECT_USER_TYPE: {
            code: 1107,
            message: {
                tr: 'Bu kullan??c?? i??in bu i??lemi yapamazs??n??z',
                en: 'The process cannot be done for this user'
            }
        },
        CODE_REQUEST_INTERVAL_EXCEED: {
            code: 1108,
            message: {
                tr: 'Yeni bir kod i??in en az 30 saniye beklemelisiniz',
                en: 'Please wait 30 seconds for a new code'
            }
        },
        DEALER_PHONE_NOT_FOUND: {
            code: 1109,
            message: {
                tr: 'Bu telefona herhangi bir yetkili servise ait de??il',
                en: 'No dealer is associated for this phone'
            }
        },
        DEALER_PHONE_BLOCKED: {
            code: 1110,
            message: {
                tr: 'Bu telefon bloke olmu??tur. L??tfen y??neticinize dan??????n.',
                en: 'This phone is blocked. Please consult your supervisor.'
            }
        },
        REQUEST_A_NEW_CODE: {
            code: 1111,
            message: {
                tr: 'L??tfen yeni bir kod talep edin',
                en: 'Please request a new code'
            }
        },
        INCORRECT_CODE: {
            code: 1112,
            message: {
                tr: 'Girdi??iniz kod hatal??',
                en: 'The code is incorrect'
            }
        },
        INCORRECT_CODE_AND_REQUEST_A_NEW_CODE: {
            code: 1113,
            message: {
                tr: 'Girdi??iniz kod hatal??. L??tfen yeni bir kod talep edin.',
                en: 'The code is incorrect. Please request a new code.'
            }
        },
        DEALER_PHONE_NOT_BLOCKED: {
            code: 1114,
            message: {
                tr: 'Bu telefon zaten bloke de??ildir',
                en: 'This phone not blocked'
            }
        },
        DEALER_PHONE_NOT_IN_YOUR_COMPANY: {
            code: 1115,
            message: {
                tr: 'Bu telefon sizin ??irketinizde de??ildir',
                en: 'This phone not in your company'
            }
        },
        DEALER_PHONE_ALREADY_EXIST: {
            code: 1116,
            message: {
                tr: 'Bu telefon zaten mevcut',
                en: 'This phone already exist'
            }
        },
        NO_FILE_UPLOADED: {
            code: 1117,
            message: {
                tr: 'L??tfen dosya y??kleyin',
                en: 'Please upload file'
            }
        },
        DEALER_PHONE_NOT_IN_YOUR_DEALER: {
            code: 1118,
            message: {
                tr: 'Bu telefon sizin bayinizde de??ildir',
                en: 'This phone not in your dealer'
            }
        },
        DEALER_PHONE_ASSIGNED_TO_JOB: {
            code: 1119,
            message: {
                tr: 'Bu telefon ??u an bir i??te kullan??lmaktad??r. Telefonu silebilmek i??in l??tfen bu i??i kapat??n.',
                en: 'This phone is now used in an active job. Please, finish the job before deleting the phone.'
            }
        },
        DEALER_CAR_ASSIGNED_TO_JOB: {
            code: 1120,
            message: {
                tr: 'Bu araba ??u an bir i??te kullan??lmaktad??r. Arabay?? silebilmek i??in l??tfen bu i??i kapat??n.',
                en: 'This car is now used in an active job. Please, finish the job before deleting the car.'
            }
        },
        TECHNICIAN_ASSIGNED_TO_JOB: {
            code: 1121,
            message: {
                tr: 'Bu teknisyen ??u an bir ??zerinde i?? vard??r. Teknisyeni silebilmek i??in l??tfen bu i??i kapat??n.',
                en: 'This technician is now used in an active job. Please, finish the job before deleting the technician.'
            }
        },
        NO_CAR_INFO_FOUND: {
            code: 1122,
            message: {
                tr: 'Ara?? gps bilgileri al??namad??',
                en: 'No car info can not get from API call'
            }
        },
        INVALID_PASSWORD: {
            code: 1123,
            message: {
                tr: '??ifreniz en az 8 karakterden olu??mal??d??r. ????erisinde en az bir k??????k harf, bir sembol bir de rakam bulunmald??r',
                en: 'Your password should be at least 8 character long. Also, it must include one lowercase character, one digit and one symbol'
            }
        },
        TICKET_TYPE_MISSING: {
            code: 1124,
            message: {
                tr: 'L??tfen ge??erli bir kay??t tipi giriniz',
                en: 'Please provide a valid ticket type'
            }
        },
        TECHNICIAN_NOT_ASSIGNED_TO_THIS_ROUTE: {
            code: 1125,
            message: {
                tr: 'Bu i?? sizin ??zerinize atanmam????t??r',
                en: 'Technician not ass??gn this route'
            }
        },
        TECHNICIAN_ALREADY_ARRIVED: {
            code: 1126,
            message: {
                tr: 'Bu i?? i??in zaten var???? bildirilmi??',
                en: 'Technician already arrive'
            }
        },
        NOT_YOUR_ACTIVE_JOB: {
            code: 1127,
            message: {
                tr: 'Bu sizin aktif i??iniz de??ildir',
                en: 'This job is not active job for this technician'
            }
        },
        TOO_MANY_IMAGES: {
            code: 1128,
            message: {
                tr: 'L??tfen daha az bir say??da resim y??kleyin',
                en: 'Please upload less piece of image'
            }
        },
        TICKET_NOT_IN_YOUR_COMPANY: {
            code: 1129,
            message: {
                tr: 'Bu kay??t sizin ??irketinize ait de??ildir',
                en: 'This ticket does not belong to your company'
            }
        },
        TECHNICIAN_COMPLETE_OPTION_NOT_FOUND: {
            code: 1130,
            message: {
                tr: 'B??yle bir se??enek bulunamad??',
                en: 'Option is not found'
            }
        },
        ROUTE_SUGGESTION_NOT_FOUND: {
            code: 1131,
            message: {
                tr: 'Route ??nerisi bulunamad??',
                en: 'Route suggestion is not found'
            }
        },
        ROUTE_SUGGESTION_NOT_IN_YOUR_COMPANY: {
            code: 1132,
            message: {
                tr: 'Bu route ??nerisi senin ??irketine ba??l?? de??il',
                en: 'This route suggestion does not belong to your company'
            }
        },
        ROUTE_SUGGESTION_EXPIRED: {
            code: 1133,
            message: {
                tr: 'Route ??nerisi zaman a????m??na u??rad??',
                en: 'Route suggestion is expired'
            }
        },
        TECHNICIAN_NOT_IN_THIS_CAR: {
            code: 1134,
            message: {
                tr: 'Teknisyen bu arabada de??il',
                en: 'Technician is not in this car'
            }
        },
        DEALER_PHONE_NOT_BELONG_TECHNICIAN: {
            code: 1135,
            message: {
                tr: 'Teknisyen bu telefona sahip de??il',
                en: 'Dealer phone not belong this technician'
            }
        },
        TECHNICIAN_NOT_ACTIVE: {
            code: 1136,
            message: {
                tr: 'Teknisyen ??u an mesaide de??il',
                en: 'Technician is not working right now'
            }
        },
        TICKET_ALREADY_COMPLETED: {
            code: 1137,
            message: {
                tr: 'Bu i?? zaten tamamlanm????',
                en: 'Technician already completed'
            }
        },
        TECHNICIAN_NOT_ARRIVED_YET: {
            code: 1138,
            message: {
                tr: 'L??tfen i??i kapamadan ??nce var???? bildiriniz',
                en: 'Please report your arrival before completing your job'
            }
        },
        TECHNICIAN_HAVE_JOB: {
            code: 1139,
            message: {
                tr: '??zerinizde i?? varken hizmet d?????? olamazs??n??z',
                en: 'You can not be in break while you have an active job'
            }
        },
        TECHNICIAN_NOT_HAVE_CAR: {
            code: 1140,
            message: {
                tr: 'Kulland??????z araba yokken hizmet veremezsiniz',
                en: 'You can not be active if you do not have car'
            }
        },
        CAR_IS_ALREADY_ON_JOB: {
            code: 1141,
            message: {
                tr: 'Ba??ka bir teknisyen bu ara??ta hizmet vermektedir',
                en: 'Another technician is currently serving with this car'
            }
        },
        UNKNOWN: {
            code: 3000,
            message: {
                tr: 'Bilinmeyen bir hata',
                en: 'Unknown error'
            }
        },
        INTERNAL_SERVER_ERROR: {
            code: 4000,
            message: {
                tr: 'Sunucu hatas??',
                en: 'Internal server error'
            }
        }
    }

};
