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
                tr: 'Lüften sisteme giriş yapın',
                en: 'Please login to the system'
            }
        },
        SHORT_PASSWORD: {
            code: 1001,
            message: {
                tr: 'Şifre çok kısa',
                en: 'Password is too short'
            }
        },
        LONG_PASSWORD: {
            code: 1002,
            message: {
                tr: 'Şifre çok uzun',
                en: 'Password is too long'
            }
        },
        BADLY_FORMATTED_EMAIL: {
            code: 1003,
            message: {
                tr: 'Geçersiz bir email adresi girdiniz',
                en: 'You entered an invalid email address'
            }
        },
        USER_ALREADY_EXISTS: {
            code: 1004,
            message: {
                tr: 'Bu kullanıcı halihazırda mevcut',
                en: 'This user already exists'
            }
        },
        DEALER_NOT_FOUND: {
            code: 1005,
            message: {
                tr: 'Satıcı bulunamadı',
                en: 'Dealer not found'
            }
        },
        MISSING_FIELDS: {
            code: 1006,
            message: {
                tr: 'Bazı alanlar eksik',
                en: 'Some fields are missing'
            }
        },
        USER_NOT_FOUND: {
            code: 1007,
            message: {
                tr: 'Kullanıcı bulunamadı',
                en: 'User not found'
            }
        },
        INCORRECT_CREDENTIALS: {
            code: 1008,
            message: {
                tr: 'E-posta veya şifre yanlış',
                en: 'Email or password is incorrect'
            }
        },
        OWN_ACCOUNT_DELETE: {
            code: 1009,
            message: {
                tr: 'Kendi hesabınızı silemessiniz',
                en: 'You cannot delete your own account'
            }
        },
        USER_NOT_IN_YOUR_COMPANY: {
            code: 1010,
            message: {
                tr: 'Bu kullanıcı sizin şirketinizde değil',
                en: 'This user does not belong to your company'
            }
        },
        AUTHORIZATION_FAILED: {
            code: 1011,
            message: {
                tr: 'Bu eylem için yetkiniz yok',
                en: 'You are not authorized for this action'
            }
        },
        NOT_SUPER_ADMIN: {
            code: 1012,
            message: {
                tr: 'Bu kullanıcı yönetici değil',
                en: 'This user is not a super admin'
            }
        },
        NOT_DEALER_ADMIN: {
            code: 1013,
            message: {
                tr: 'Bu kullanıcı bayi yöneticisi değil',
                en:'This user is not a dealer admin'
            }
        },
        INCORRECT_URL: {
            code: 1014,
            message: {
                tr: 'Yanlış url',
                en: 'This is an incorrect url'
            }
        },
        EMPTY_BODY: {
            code: 1015,
            message: {
                tr: 'Veri girilmemiş',
                en: 'No data provided'
            }
        },
        DELETED_USER_ALREADY_EXISTS: {
            code: 1016,
            message: {
                tr: 'Bu e-posta ile silinmiş bir kullanıcı mevcut',
                en: 'A deleted user already exists with this email'
            }
        },
        TOW_TRUCK_COMPANY_NOT_FOUND: {
            code: 1017,
            message: {
                tr: 'Çekici şirketi bulunamadı',
                en: 'Tow truck company not found'
            }
        },
        NOT_ADMIN_OF_DEALER: {
            code: 1018,
            message: {
                tr: 'Bu kullanıcı belirtilen bayinin yöneticisi değil',
                en: 'This user is not admin of the dealer'
            }
        },
        THEME_NOT_FOUND: {
            code: 1019,
            message: {
                tr: 'Tema bulunamadı',
                en: 'This theme is not found'
            }
        },
        NAME_MISSING: {
            code: 1020,
            message: {
                tr: 'Lütfen isim giriniz',
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
                tr: 'Lütfen soyisim giriniz',
                en: 'Please provide a password'
            }
        },
        BAD_FORMAT_PHONE: {
            code: 1023,
            message: {
                tr: 'Lütfen doğru bir telefon numarası giriniz',
                en: 'Please provide a correct phone number'
            }
        },
        TECHNICIAN_NOT_FOUND: {
            code: 1024,
            message: {
                tr: 'Teknisyen bulunamadı',
                en: 'This technician is not found'
            }
        },
        TECHNICIAN_NOT_IN_YOUR_DEALER: {
            code: 1025,
            message: {
                tr: 'Bu teknisyen senin şirketine bağlı değil',
                en:'This technician does not belong to your company'
            }
        },
        BRAND_MISSING: {
            code: 1026,
            message: {
                tr: 'Lütfen marka ismi giriniz',
                en: 'Please provide a brand name'
            }
        },
        MODEL_MISSING: {
            code: 1027,
            message: {
                tr: 'Lütfen model ismi giriniz',
                en: 'Please provide a model name'
            }
        },
        BRAND_NOT_IN_YOUR_COMPANY: {
            code: 1028,
            message: {
                tr: 'Bu marka senin şirketine bağlı değil',
                en: 'This brand does not belong to your company'
            }
        },
        BRAND_NOT_FOUND: {
            code: 1029,
            message: {
                tr: 'Bu marka bulunamadı',
                en: 'This brand is not found'
            }
        },
        MODEL_NOT_FOUND: {
            code: 1030,
            message: {
                tr: 'Bu model bulunamadı',
                en: 'This model is not found'
            }
        },
        MODEL_NOT_IN_YOUR_COMPANY: {
            code: 1031,
            message: {
                tr: 'Bu model senin şirketine bağlı değil',
                en: 'This model does not belong to your company'
            }
        },
        DEALER_CAR_ALREADY_EXIST: {
            code: 1032,
            message: {
                tr: 'Bu plakayla bir bayi aracı zaten mevcut',
                en: 'A dealer car already exists with this plate'
            }
        },
        DEALER_CAR_NOT_FOUND: {
            code: 1033,
            message: {
                tr: 'Bu bayi aracı bulunamadı',
                en: 'This dealer car is not found'
            }
        },
        PLATE_MISSING: {
            code: 1034,
            message: {
                tr: 'Lütfen bir plaka giriniz',
                en: 'Please provide a plate'
            }
        },
        GPS_ID_MISSING: {
            code: 1035,
            message: {
                tr: 'Lütfen bir gps numarası giriniz',
                en: 'Please provide a gps id'
            }
        },
        MAX_VELOCITY_MISSING: {
            code: 1036,
            message: {
                tr: 'Lütfen maximum hızı giriniz',
                en: 'Please provide a max velocity'
            }
        },
        DEALER_CAR_NOT_IN_YOUR_DEALER: {
            code: 1037,
            message: {
                tr: 'Bu bayi aracı sizin bayinize ait değil',
                en: 'This dealer car does not belong to your dealer'
            }
        },
        SHORT_NAME_MISSING: {
            code: 1038,
            message: {
                tr: 'Lütfen bir kısa isim giriniz',
                en: 'Please provide a shortname'
            }
        },
        CITY_MISSING: {
            code: 1039,
            message: {
                tr: 'Lütfen bir şehir giriniz',
                en: 'Please provide a city'
            }
        },
        DISTRICT_MISSING: {
            code: 1040,
            message: {
                tr: 'Lütfen bir bölge ismi giriniz',
                en: 'Please provide a district'
            }
        },
        ADDRESS_MISSING: {
            code: 1041,
            message: {
                tr: 'Lütfen bir adres giriniz',
                en: 'Please provide a address'
            }
        },
        LATITUDE_MISSING: {
            code: 1042,
            message: {
                tr: 'Lütfen bir enlem giriniz',
                en: 'Please provide a latitude'
            }
        },
        LONGITUDE_MISSING: {
            code: 1043,
            message: {
                tr: 'Lütfen bir boylam giriniz',
                en: 'Please provide a longitude'
            }
        },
        PRIVILEGE_MISSING: {
            code: 1044,
            message: {
                tr: 'Lütfen bir articalik giriniz',
                en: 'Please provide a previliage'
            }
        },
        TYPE_MISSING: {
            code: 1045,
            message: {
                tr: 'Lütfen bir tip giriniz',
                en: 'Please provide a type'
            }
        },
        TYPE_NOT_FOUND: {
            code: 1046,
            message: {
                tr: 'Bu tip bulunamadı',
                en: 'This type is not found'
            }
        },
        TYPE_NOT_IN_YOUR_COMPANY: {
            code: 1047,
            message: {
                tr: 'Bu tip senin şirketine ait değil',
                en: 'This type does not belong to your company'
            }
        },
        DEALER_NOT_IN_YOUR_COMPANY: {
            code: 1048,
            message: {
                tr: 'Bu bayi senin şirketine ait değil',
                en: 'This dealer does not belong to your company'
            }
        },
        DEALER_RESPONSIBLE_ALREADY_EXISTS: {
            code: 1049,
            message: {
                tr: 'Bu kullanıcı zaten bu bayiden sorumlu',
                en: 'This user is already a responsible of this dealer'
            }
        },
        TOW_TRUCK_COMPANY_ALREADY_EXIST: {
            code: 1050,
            message: {
                tr: 'Bu isimde çekici şirketi zaten mevcut',
                en: 'A tow truck company already exists with this name'
            }
        },
        TOW_TRUCK_COMPANY_NOT_IN_YOUR_COMPANY: {
            code: 1051,
            message: {
                tr: 'Bu çekiçi şirketi senin şirkentine ait değil',
                en: 'This tow truck company does not belong to your company'
            }
        },
        YEAR_MISSING: {
            code: 1052,
            message: {
                tr: 'Lütfen bir yıl giriniz',
                en: 'Please provide a year'
            }
        },
        PHONE_MISSING: {
            code: 1053,
            message: {
                tr: 'Lütfen geçerli bir telefon numarası giriniz',
                en: 'Please provide a valid phone'
            }
        },
        DEALER_RESPONSIBLE_NOT_EXISTS: {
            code: 1054,
            message: {
                tr: 'Bu kullanıcı bu bayiden sorumlu değil',
                en: 'This user is not a responsible of the dealer'
            }
        },
        DEALER_RESPONSIBLE_NOT_IN_YOUR_COMPANY: {
            code: 1055,
            message: {
                tr: 'Bu bayi sorumlusu senin şirketine ait değil',
                en: 'This dealer responsible does not belong to your company'
            }
        },
        TOW_TRUCK_ALREADY_EXIST: {
            code: 1056,
            message: {
                tr: 'Bu plaka ile halihazırda bir çekici arabası mevcut',
                en: 'A tow truck already exists with this plate'
            }
        },
        TITLE_MISSING: {
            code: 1057,
            message: {
                tr: 'Lütfen geçerli bir başlık giriniz',
                en: 'Please provide a valid title'
            }
        },
        TOW_TRUCK_COMPANY_CONTACT_NOT_EXISTS: {
            code: 1058,
            message: {
                tr: 'Bu bağlantı mevcut değil',
                en: 'This contact does not exists'
            }
        },
        TOW_TRUCK_NOT_FOUND: {
            code: 1059,
            message: {
                tr: 'Bu çekici bulunamadı',
                en: 'This tow truck is not found'
            }
        },
        TOW_TRUCK_NOT_IN_YOUR_COMPANY: {
            code: 1060,
            message: {
                tr: 'Bu çekici senin şirketinde değil',
                en: 'This tow truck is not in your company'
            }
        },
        DEALER_CONTACT_NOT_FOUND: {
            code: 1061,
            message: {
                tr: 'Bu bağlantı mevcut değil',
                en: 'This contact does not exist'
            }
        },
        DEALER_CONTACT_NOT_IN_YOUR_DEALER: {
            code: 1062,
            message: {
                tr: 'Bu bağlantı senin bayine ait değil',
                en: 'This contact does not belong to your dealer'
            }
        },
        NOT_ADMIN_OF_TOW_TRUCK_COMPANY: {
            code: 1063,
            message: {
                tr: 'Bu çekici şirketinde yönetici değilsiniz',
                en: 'You are not an admin in this tow truck company'
            }
        },
        TOW_TRUCK_DRIVER_NOT_FOUND: {
            code: 1064,
            message: {
                tr: 'Çekici şöförü bulunamadı',
                en: 'Tow truck driver not found'
            }
        },
        TOW_TRUCK_DRIVER_NOT_IN_THIS_COMPANY: {
            code: 1065,
            message: {
                tr: 'Bu çekici şöförü senin şirketinde değil',
                en: 'This tow truck driver is not in your company'
            }
        },
        COMPLAINT_TYPE_MISSING: {
            code: 1067,
            message: {
                tr: 'Lütfen geçerli bir kullanıcı tipi giriniz',
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
                tr: 'Girilen NAF emaili bulunamadı',
                en: 'This complaint email not found'
            }
        },
        COMPLAINT_EMAIL_NOT_IN_YOUR_COMPANY: {
            code: 1070,
            message: {
                tr: 'Girilen NAF emaili bu firmaya kayıtlı değil',
                en: 'This complaint email is not in your company'
            }
        },
        ACTIVE_TICKET_EXISTS_FOR_THIS_PLATE: {
            code: 1071,
            message: {
                tr: 'Bu plaka için halihazırda bir kayıt mevuct',
                en: 'There is already an active ticket for this plate'
            }
        },
        VERSION_MISSING: {
            code: 1072,
            message: {
                tr: 'Lütfen geçerli bir versiyon giriniz',
                en: 'Please provide a valid version'
            }
        },
        MOTOR_NO_MISSING: {
            code: 1073,
            message: {
                tr: 'Lütfen geçerli bir motor numarası giriniz',
                en: 'Please provide a valid motor no'
            }
        },
        COLOR_MISSING: {
            code: 1074,
            message: {
                tr: 'Lütfen geçerli bir renk giriniz',
                en: 'Please provide a valid color'
            }
        },
        CHASSIS_MISSING: {
            code: 1075,
            message: {
                tr: 'Lütfen geçerli bir şasi giriniz',
                en: 'Please provide a valid chassis'
            }
        },
        WARRANTY_MISSING: {
            code: 1076,
            message: {
                tr: 'Lütfen geçerli bir garanti giriniz',
                en: 'Please provide a valid warranty'
            }
        },
        FUEL_MISSING: {
            code: 1077,
            message: {
                tr: 'Lütfen geçerli bir yakıt tipi giriniz',
                en: 'Please provide a valid fuel type'
            }
        },
        DELIVERY_DATE_MISSING: {
            code: 1078,
            message: {
                tr: 'Lütfen geçerli bir teslim tarihi giriniz',
                en: 'Please provide a valid delivery date'
            }
        },
        TOW_TRUCK_COMPANY_CONTACT_NOT_IN_THIS_COMPANY: {
            code: 1079,
            message: {
                tr: 'Bu bağlantı senin çekici şirketinde değil',
                en: 'This contact not in your tow truck company'
            }
        },
        COMPANY_CAR_FIELD_NOT_FOUND: {
            code: 1080,
            message: {
                tr: 'Bu şirket otomobil sahası bulunamadı',
                en: 'This company car field not found'
            }
        },
        COMPANY_CAR_FIELD_NOT_IN_YOUR_COMPANY: {
            code: 1081,
            message: {
                tr: 'Bu şirket otomobil sahası senin şirketinde değil',
                en: 'This company car field not in your company'
            }
        },
        COMMENT_MISSING: {
            code: 1082,
            message: {
                tr: 'Lütfen geçerli bir açıklama giriniz',
                en: 'Please provide a valid comment'
            }
        },
        TICKET_NOT_FOUND: {
            code: 1083,
            message: {
                tr: 'Böyle bir kayıt bulunamadı',
                en: 'Ticket is not found'
            }
        },
        TICKET_NOT_IN_YOUR_COMPANY: {
            code: 1084,
            message: {
                tr: 'Bu kayıt sizin şirketinize ait değildir',
                en: 'This ticket does not belong to your company'
            }
        },
        TICKET_COMPLETE: {
            code: 1085,
            message: {
                tr: 'Bu kayıt sona ermiştir',
                en: 'This ticket is ended'
            }
        },
        TECHNICIAN_NOT_IN_YOUR_COMPANY: {
            code: 1086,
            message: {
                tr: 'Bu teknisyen sizin şirketinize bağlı değildir',
                en: 'This technician does not belong to your company'
            }
        },
        CUSTOMER_LOCATION_NOT_UPLOADED: {
            code: 1087,
            message: {
                tr: 'Müşterinin yeri henüz yüklenmedi',
                en: 'Customer location has not been uploaded yet'
            }
        },
        TECHNICIAN_DENY_OPTION_NOT_FOUND: {
            code: 1088,
            message: {
                tr: 'Böyle bir seçenek bulunamadı',
                en: 'Option is not found'
            }
        },
        TICKET_COMMENT_NOT_FOUND: {
            code: 1089,
            message: {
                tr: 'Kayıt yorumu bulunamadı',
                en: 'Ticket comment is not found'
            }
        },
        TICKET_COMMENT_NOT_IN_YOUR_COMPANY: {
            code: 1090,
            message: {
                tr: 'Kayıt yorumu sizin şirketinize bağlı değildir',
                en: 'Ticket comment does not belong to your company'
            }
        },
        TECHNICIAN_DENY_NOT_FOUND: {
            code: 1091,
            message: {
                tr: 'Böyle bir sebep bulunamadı',
                en: 'Deny is not found'
            }
        },
        TECHNICIAN_ALREADY_ASSIGNED_FOR_DENY: {
            code: 1092,
            message: {
                tr: 'Teknisten zaten atanmimış',
                en: 'Technician already assigned'
            }
        },
        TICKET_TECHNICIAN_INFO_NOT_FOUND: {
            code: 1093,
            message: {
                tr: 'Böyle bir teknisyen bilgisi bulunamadi',
                en: 'technician info not found'
            }
        },
        EXACTLY_ONE_PRIMARY_CONTACT: {
            code: 1094,
            message: {
                tr: 'Sadece ve sadece bir tane iletişim kişisi birincil olabilir',
                en: 'Exactly one contact can be primary'
            }
        },
        CONTACTS_NOT_SORTED: {
            code: 1095,
            message: {
                tr: 'İletişim kişileri sıralı değil',
                en: 'Contacts are not sorted'
            }
        },
        DISTANCE_MATRIX_FAILED: {
            code: 1096,
            message: {
                tr: 'Tahmini süre hesaplanamadı',
                en: 'Estimated time could not be calculated'
            }
        },
        REVERSE_GEOCODE_ERROR: {
            code: 1097,
            message: {
                tr: 'Seçilen konuma ait bir adres Google Maps\'te bulunamadı',
                en: 'No place is found for the selected location in Google Maps\''
            }
        },
        START_DATE_MISSING: {
            code: 1098,
            message: {
                tr: 'Lütfen geçerli bir başlangıç tarihi giriniz',
                en: 'Please provide a valid start date'
            }
        },
        END_DATE_MISSING: {
            code: 1098,
            message: {
                tr: 'Lütfen geçerli bir bitiş tarihi giriniz',
                en: 'Please provide a valid end date'
            }
        },
        NO_REQUEST_FOR_TECHNICIAN_IMAGE: {
            code: 1099,
            message: {
                tr: 'Bu tehknisyen için bir istek bulunmamaktadır',
                en: 'There is no request for technician image'
            }
        },
        NIGHT_DUTY_PLACE_ALREADY_EXIST: {
            code: 1100,
            message: {
                tr: 'Bu şehir zaten eklenmiş',
                en: 'Night duty place already exist'
            }
        },
        NIGHT_DUTY_PLACE_NOT_FOUND: {
            code: 1101,
            message: {
                tr: 'Bu şehir bulunmamaktadır',
                en: 'There is no night duty place'
            }
        },
        NIGHT_DUTY_PLACE_NOT_IN_YOUR_COMPANY: {
            code: 1102,
            message: {
                tr: 'Bu şehir sizin şirketinize bağlı değildir',
                en: 'Night duty place not in your country'
            }
        },
        IMAGE_UPLOAD_FAILED: {
            code: 1103,
            message: {
                tr: 'Resim yüklenirken hata oluştu',
                en: 'Failed while uploading the image'
            }
        },
        INCORRECT_FILE_TYPE: {
            code: 1104,
            message: {
                tr: 'Geçersiz dosya formatı',
                en: 'Invalid file format'
            }
        },
        IMAGE_TOO_LARGE: {
            code: 1105,
            message: {
                tr: 'Lütfen daha küçük bir boyutta resim yükleyin',
                en: 'Please upload a smaller image in size'
            }
        },
        INCORRECT_FIELD_NAME: {
            code: 1106,
            message: {
                tr: 'Hatalı alan adı',
                en: 'Incorrect field name'
            }
        },
        INCORRECT_USER_TYPE: {
            code: 1107,
            message: {
                tr: 'Bu kullanıcı için bu işlemi yapamazsınız',
                en: 'The process cannot be done for this user'
            }
        },
        CODE_REQUEST_INTERVAL_EXCEED: {
            code: 1108,
            message: {
                tr: 'Yeni bir kod için en az 30 saniye beklemelisiniz',
                en: 'Please wait 30 seconds for a new code'
            }
        },
        DEALER_PHONE_NOT_FOUND: {
            code: 1109,
            message: {
                tr: 'Bu telefona herhangi bir yetkili servise ait değil',
                en: 'No dealer is associated for this phone'
            }
        },
        DEALER_PHONE_BLOCKED: {
            code: 1110,
            message: {
                tr: 'Bu telefon bloke olmuştur. Lütfen yöneticinize danışın.',
                en: 'This phone is blocked. Please consult your supervisor.'
            }
        },
        REQUEST_A_NEW_CODE: {
            code: 1111,
            message: {
                tr: 'Lütfen yeni bir kod talep edin',
                en: 'Please request a new code'
            }
        },
        INCORRECT_CODE: {
            code: 1112,
            message: {
                tr: 'Girdiğiniz kod hatalı',
                en: 'The code is incorrect'
            }
        },
        INCORRECT_CODE_AND_REQUEST_A_NEW_CODE: {
            code: 1113,
            message: {
                tr: 'Girdiğiniz kod hatalı. Lütfen yeni bir kod talep edin.',
                en: 'The code is incorrect. Please request a new code.'
            }
        },
        DEALER_PHONE_NOT_BLOCKED: {
            code: 1114,
            message: {
                tr: 'Bu telefon zaten bloke değildir',
                en: 'This phone not blocked'
            }
        },
        DEALER_PHONE_NOT_IN_YOUR_COMPANY: {
            code: 1115,
            message: {
                tr: 'Bu telefon sizin şirketinizde değildir',
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
                tr: 'Lütfen dosya yükleyin',
                en: 'Please upload file'
            }
        },
        DEALER_PHONE_NOT_IN_YOUR_DEALER: {
            code: 1118,
            message: {
                tr: 'Bu telefon sizin bayinizde değildir',
                en: 'This phone not in your dealer'
            }
        },
        DEALER_PHONE_ASSIGNED_TO_JOB: {
            code: 1119,
            message: {
                tr: 'Bu telefon şu an bir işte kullanılmaktadır. Telefonu silebilmek için lütfen bu işi kapatın.',
                en: 'This phone is now used in an active job. Please, finish the job before deleting the phone.'
            }
        },
        DEALER_CAR_ASSIGNED_TO_JOB: {
            code: 1120,
            message: {
                tr: 'Bu araba şu an bir işte kullanılmaktadır. Arabayı silebilmek için lütfen bu işi kapatın.',
                en: 'This car is now used in an active job. Please, finish the job before deleting the car.'
            }
        },
        TECHNICIAN_ASSIGNED_TO_JOB: {
            code: 1121,
            message: {
                tr: 'Bu teknisyen şu an bir üzerinde iş vardır. Teknisyeni silebilmek için lütfen bu işi kapatın.',
                en: 'This technician is now used in an active job. Please, finish the job before deleting the technician.'
            }
        },
        NO_CAR_INFO_FOUND: {
            code: 1122,
            message: {
                tr: 'Araç gps bilgileri alınamadı',
                en: 'No car info can not get from API call'
            }
        },
        INVALID_PASSWORD: {
            code: 1123,
            message: {
                tr: 'Şifreniz en az 8 karakterden oluşmalıdır. İçerisinde en az bir küçük harf, bir sembol bir de rakam bulunmaldır',
                en: 'Your password should be at least 8 character long. Also, it must include one lowercase character, one digit and one symbol'
            }
        },
        TICKET_TYPE_MISSING: {
            code: 1124,
            message: {
                tr: 'Lütfen geçerli bir kayıt tipi giriniz',
                en: 'Please provide a valid ticket type'
            }
        },
        TECHNICIAN_NOT_ASSIGNED_TO_THIS_ROUTE: {
            code: 1125,
            message: {
                tr: 'Bu iş sizin üzerinize atanmamıştır',
                en: 'Technician not assıgn this route'
            }
        },
        TECHNICIAN_ALREADY_ARRIVED: {
            code: 1126,
            message: {
                tr: 'Bu iş için zaten varış bildirilmiş',
                en: 'Technician already arrive'
            }
        },
        NOT_YOUR_ACTIVE_JOB: {
            code: 1127,
            message: {
                tr: 'Bu sizin aktif işiniz değildir',
                en: 'This job is not active job for this technician'
            }
        },
        TOO_MANY_IMAGES: {
            code: 1128,
            message: {
                tr: 'Lütfen daha az bir sayıda resim yükleyin',
                en: 'Please upload less piece of image'
            }
        },
        TICKET_NOT_IN_YOUR_COMPANY: {
            code: 1129,
            message: {
                tr: 'Bu kayıt sizin şirketinize ait değildir',
                en: 'This ticket does not belong to your company'
            }
        },
        TECHNICIAN_COMPLETE_OPTION_NOT_FOUND: {
            code: 1130,
            message: {
                tr: 'Böyle bir seçenek bulunamadı',
                en: 'Option is not found'
            }
        },
        ROUTE_SUGGESTION_NOT_FOUND: {
            code: 1131,
            message: {
                tr: 'Route önerisi bulunamadı',
                en: 'Route suggestion is not found'
            }
        },
        ROUTE_SUGGESTION_NOT_IN_YOUR_COMPANY: {
            code: 1132,
            message: {
                tr: 'Bu route önerisi senin şirketine bağlı değil',
                en: 'This route suggestion does not belong to your company'
            }
        },
        ROUTE_SUGGESTION_EXPIRED: {
            code: 1133,
            message: {
                tr: 'Route önerisi zaman aşımına uğradı',
                en: 'Route suggestion is expired'
            }
        },
        TECHNICIAN_NOT_IN_THIS_CAR: {
            code: 1134,
            message: {
                tr: 'Teknisyen bu arabada değil',
                en: 'Technician is not in this car'
            }
        },
        DEALER_PHONE_NOT_BELONG_TECHNICIAN: {
            code: 1135,
            message: {
                tr: 'Teknisyen bu telefona sahip değil',
                en: 'Dealer phone not belong this technician'
            }
        },
        TECHNICIAN_NOT_ACTIVE: {
            code: 1136,
            message: {
                tr: 'Teknisyen şu an mesaide değil',
                en: 'Technician is not working right now'
            }
        },
        TICKET_ALREADY_COMPLETED: {
            code: 1137,
            message: {
                tr: 'Bu iş zaten tamamlanmış',
                en: 'Technician already completed'
            }
        },
        TECHNICIAN_NOT_ARRIVED_YET: {
            code: 1138,
            message: {
                tr: 'Lütfen işi kapamadan önce varış bildiriniz',
                en: 'Please report your arrival before completing your job'
            }
        },
        TECHNICIAN_HAVE_JOB: {
            code: 1139,
            message: {
                tr: 'Üzerinizde iş varken hizmet dışı olamazsınız',
                en: 'You can not be in break while you have an active job'
            }
        },
        TECHNICIAN_NOT_HAVE_CAR: {
            code: 1140,
            message: {
                tr: 'Kullandığız araba yokken hizmet veremezsiniz',
                en: 'You can not be active if you do not have car'
            }
        },
        CAR_IS_ALREADY_ON_JOB: {
            code: 1141,
            message: {
                tr: 'Başka bir teknisyen bu araçta hizmet vermektedir',
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
                tr: 'Sunucu hatası',
                en: 'Internal server error'
            }
        }
    }

};
