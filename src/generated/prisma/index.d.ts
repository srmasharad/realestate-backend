
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserMedia
 * 
 */
export type UserMedia = $Result.DefaultSelection<Prisma.$UserMediaPayload>
/**
 * Model PersonProfile
 * 
 */
export type PersonProfile = $Result.DefaultSelection<Prisma.$PersonProfilePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model PropertyMedia
 * 
 */
export type PropertyMedia = $Result.DefaultSelection<Prisma.$PropertyMediaPayload>
/**
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model AgencyMember
 * 
 */
export type AgencyMember = $Result.DefaultSelection<Prisma.$AgencyMemberPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  AGENT: 'AGENT',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ListingType: {
  RENT: 'RENT',
  SALE: 'SALE'
};

export type ListingType = (typeof ListingType)[keyof typeof ListingType]


export const PropertyType: {
  HOUSE: 'HOUSE',
  UNIT: 'UNIT',
  TOWNHOUSE: 'TOWNHOUSE',
  APARTMENT: 'APARTMENT',
  COMMERCIAL: 'COMMERCIAL',
  LAND: 'LAND'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const UserMediaType: {
  PROFILE_IMAGE: 'PROFILE_IMAGE'
};

export type UserMediaType = (typeof UserMediaType)[keyof typeof UserMediaType]


export const PropertyMediaType: {
  IMAGE: 'IMAGE'
};

export type PropertyMediaType = (typeof PropertyMediaType)[keyof typeof PropertyMediaType]


export const MediaVisibility: {
  PUBLIC: 'PUBLIC',
  PROTECTED: 'PROTECTED'
};

export type MediaVisibility = (typeof MediaVisibility)[keyof typeof MediaVisibility]


export const AgencyStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  SUSPENDED: 'SUSPENDED'
};

export type AgencyStatus = (typeof AgencyStatus)[keyof typeof AgencyStatus]


export const AgencyMemberRole: {
  AGENCY_OWNER: 'AGENCY_OWNER',
  AGENCY_ADMIN: 'AGENCY_ADMIN',
  AGENT: 'AGENT'
};

export type AgencyMemberRole = (typeof AgencyMemberRole)[keyof typeof AgencyMemberRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ListingType = $Enums.ListingType

export const ListingType: typeof $Enums.ListingType

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type UserMediaType = $Enums.UserMediaType

export const UserMediaType: typeof $Enums.UserMediaType

export type PropertyMediaType = $Enums.PropertyMediaType

export const PropertyMediaType: typeof $Enums.PropertyMediaType

export type MediaVisibility = $Enums.MediaVisibility

export const MediaVisibility: typeof $Enums.MediaVisibility

export type AgencyStatus = $Enums.AgencyStatus

export const AgencyStatus: typeof $Enums.AgencyStatus

export type AgencyMemberRole = $Enums.AgencyMemberRole

export const AgencyMemberRole: typeof $Enums.AgencyMemberRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMedia`: Exposes CRUD operations for the **UserMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMedias
    * const userMedias = await prisma.userMedia.findMany()
    * ```
    */
  get userMedia(): Prisma.UserMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personProfile`: Exposes CRUD operations for the **PersonProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonProfiles
    * const personProfiles = await prisma.personProfile.findMany()
    * ```
    */
  get personProfile(): Prisma.PersonProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyMedia`: Exposes CRUD operations for the **PropertyMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyMedias
    * const propertyMedias = await prisma.propertyMedia.findMany()
    * ```
    */
  get propertyMedia(): Prisma.PropertyMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agencyMember`: Exposes CRUD operations for the **AgencyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgencyMembers
    * const agencyMembers = await prisma.agencyMember.findMany()
    * ```
    */
  get agencyMember(): Prisma.AgencyMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserMedia: 'UserMedia',
    PersonProfile: 'PersonProfile',
    Property: 'Property',
    Application: 'Application',
    EmailVerificationToken: 'EmailVerificationToken',
    PropertyMedia: 'PropertyMedia',
    Agency: 'Agency',
    AgencyMember: 'AgencyMember',
    PasswordResetToken: 'PasswordResetToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userMedia" | "personProfile" | "property" | "application" | "emailVerificationToken" | "propertyMedia" | "agency" | "agencyMember" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserMedia: {
        payload: Prisma.$UserMediaPayload<ExtArgs>
        fields: Prisma.UserMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          findFirst: {
            args: Prisma.UserMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          findMany: {
            args: Prisma.UserMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>[]
          }
          create: {
            args: Prisma.UserMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          createMany: {
            args: Prisma.UserMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>[]
          }
          delete: {
            args: Prisma.UserMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          update: {
            args: Prisma.UserMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          deleteMany: {
            args: Prisma.UserMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>[]
          }
          upsert: {
            args: Prisma.UserMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMediaPayload>
          }
          aggregate: {
            args: Prisma.UserMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMedia>
          }
          groupBy: {
            args: Prisma.UserMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMediaCountArgs<ExtArgs>
            result: $Utils.Optional<UserMediaCountAggregateOutputType> | number
          }
        }
      }
      PersonProfile: {
        payload: Prisma.$PersonProfilePayload<ExtArgs>
        fields: Prisma.PersonProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>
          }
          findFirst: {
            args: Prisma.PersonProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>
          }
          findMany: {
            args: Prisma.PersonProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>[]
          }
          create: {
            args: Prisma.PersonProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>
          }
          createMany: {
            args: Prisma.PersonProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>[]
          }
          delete: {
            args: Prisma.PersonProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>
          }
          update: {
            args: Prisma.PersonProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>
          }
          deleteMany: {
            args: Prisma.PersonProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>[]
          }
          upsert: {
            args: Prisma.PersonProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonProfilePayload>
          }
          aggregate: {
            args: Prisma.PersonProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonProfile>
          }
          groupBy: {
            args: Prisma.PersonProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PersonProfileCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      PropertyMedia: {
        payload: Prisma.$PropertyMediaPayload<ExtArgs>
        fields: Prisma.PropertyMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          findFirst: {
            args: Prisma.PropertyMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          findMany: {
            args: Prisma.PropertyMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>[]
          }
          create: {
            args: Prisma.PropertyMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          createMany: {
            args: Prisma.PropertyMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>[]
          }
          delete: {
            args: Prisma.PropertyMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          update: {
            args: Prisma.PropertyMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          deleteMany: {
            args: Prisma.PropertyMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>[]
          }
          upsert: {
            args: Prisma.PropertyMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyMediaPayload>
          }
          aggregate: {
            args: Prisma.PropertyMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyMedia>
          }
          groupBy: {
            args: Prisma.PropertyMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyMediaCountAggregateOutputType> | number
          }
        }
      }
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      AgencyMember: {
        payload: Prisma.$AgencyMemberPayload<ExtArgs>
        fields: Prisma.AgencyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          findFirst: {
            args: Prisma.AgencyMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          findMany: {
            args: Prisma.AgencyMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>[]
          }
          create: {
            args: Prisma.AgencyMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          createMany: {
            args: Prisma.AgencyMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>[]
          }
          delete: {
            args: Prisma.AgencyMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          update: {
            args: Prisma.AgencyMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          deleteMany: {
            args: Prisma.AgencyMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>[]
          }
          upsert: {
            args: Prisma.AgencyMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyMemberPayload>
          }
          aggregate: {
            args: Prisma.AgencyMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgencyMember>
          }
          groupBy: {
            args: Prisma.AgencyMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyMemberCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyMemberCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userMedia?: UserMediaOmit
    personProfile?: PersonProfileOmit
    property?: PropertyOmit
    application?: ApplicationOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    propertyMedia?: PropertyMediaOmit
    agency?: AgencyOmit
    agencyMember?: AgencyMemberOmit
    passwordResetToken?: PasswordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    properties: number
    applications: number
    emailVerificationTokens: number
    media: number
    agencyMemberships: number
    passwordResetTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    emailVerificationTokens?: boolean | UserCountOutputTypeCountEmailVerificationTokensArgs
    media?: boolean | UserCountOutputTypeCountMediaArgs
    agencyMemberships?: boolean | UserCountOutputTypeCountAgencyMembershipsArgs
    passwordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgencyMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    application: number
    media: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | PropertyCountOutputTypeCountApplicationArgs
    media?: boolean | PropertyCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyMediaWhereInput
  }


  /**
   * Count Type AgencyCountOutputType
   */

  export type AgencyCountOutputType = {
    members: number
    property: number
  }

  export type AgencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | AgencyCountOutputTypeCountMembersArgs
    property?: boolean | AgencyCountOutputTypeCountPropertyArgs
  }

  // Custom InputTypes
  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyCountOutputType
     */
    select?: AgencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyMemberWhereInput
  }

  /**
   * AgencyCountOutputType without action
   */
  export type AgencyCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type AgencyMemberCountOutputType
   */

  export type AgencyMemberCountOutputType = {
    assignedProperties: number
  }

  export type AgencyMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedProperties?: boolean | AgencyMemberCountOutputTypeCountAssignedPropertiesArgs
  }

  // Custom InputTypes
  /**
   * AgencyMemberCountOutputType without action
   */
  export type AgencyMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMemberCountOutputType
     */
    select?: AgencyMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencyMemberCountOutputType without action
   */
  export type AgencyMemberCountOutputTypeCountAssignedPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    passwordHash: string | null
    phone: string | null
    googleId: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    passwordHash: string | null
    phone: string | null
    googleId: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    passwordHash: number
    phone: number
    googleId: number
    role: number
    isActive: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    passwordHash?: true
    phone?: true
    googleId?: true
    role?: true
    isActive?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    passwordHash?: true
    phone?: true
    googleId?: true
    role?: true
    isActive?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    passwordHash?: true
    phone?: true
    googleId?: true
    role?: true
    isActive?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    fullName: string
    passwordHash: string | null
    phone: string | null
    googleId: string | null
    role: $Enums.UserRole
    isActive: boolean
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    passwordHash?: boolean
    phone?: boolean
    googleId?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | User$propertiesArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    agencyMemberships?: boolean | User$agencyMembershipsArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    passwordHash?: boolean
    phone?: boolean
    googleId?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    passwordHash?: boolean
    phone?: boolean
    googleId?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    passwordHash?: boolean
    phone?: boolean
    googleId?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "passwordHash" | "phone" | "googleId" | "role" | "isActive" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | User$propertiesArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    agencyMemberships?: boolean | User$agencyMembershipsArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      profile: Prisma.$PersonProfilePayload<ExtArgs> | null
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      emailVerificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[]
      media: Prisma.$UserMediaPayload<ExtArgs>[]
      agencyMemberships: Prisma.$AgencyMemberPayload<ExtArgs>[]
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string
      passwordHash: string | null
      phone: string | null
      googleId: string | null
      role: $Enums.UserRole
      isActive: boolean
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerificationTokens<T extends User$emailVerificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends User$mediaArgs<ExtArgs> = {}>(args?: Subset<T, User$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agencyMemberships<T extends User$agencyMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$agencyMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    where?: PersonProfileWhereInput
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.emailVerificationTokens
   */
  export type User$emailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    cursor?: EmailVerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * User.media
   */
  export type User$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    where?: UserMediaWhereInput
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    cursor?: UserMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * User.agencyMemberships
   */
  export type User$agencyMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    where?: AgencyMemberWhereInput
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    cursor?: AgencyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserMedia
   */

  export type AggregateUserMedia = {
    _count: UserMediaCountAggregateOutputType | null
    _min: UserMediaMinAggregateOutputType | null
    _max: UserMediaMaxAggregateOutputType | null
  }

  export type UserMediaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mediaType: $Enums.UserMediaType | null
    visibility: $Enums.MediaVisibility | null
    url: string | null
    publicId: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMediaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mediaType: $Enums.UserMediaType | null
    visibility: $Enums.MediaVisibility | null
    url: string | null
    publicId: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMediaCountAggregateOutputType = {
    id: number
    userId: number
    mediaType: number
    visibility: number
    url: number
    publicId: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMediaMinAggregateInputType = {
    id?: true
    userId?: true
    mediaType?: true
    visibility?: true
    url?: true
    publicId?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMediaMaxAggregateInputType = {
    id?: true
    userId?: true
    mediaType?: true
    visibility?: true
    url?: true
    publicId?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMediaCountAggregateInputType = {
    id?: true
    userId?: true
    mediaType?: true
    visibility?: true
    url?: true
    publicId?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedia to aggregate.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMedias
    **/
    _count?: true | UserMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMediaMaxAggregateInputType
  }

  export type GetUserMediaAggregateType<T extends UserMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMedia[P]>
      : GetScalarType<T[P], AggregateUserMedia[P]>
  }




  export type UserMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMediaWhereInput
    orderBy?: UserMediaOrderByWithAggregationInput | UserMediaOrderByWithAggregationInput[]
    by: UserMediaScalarFieldEnum[] | UserMediaScalarFieldEnum
    having?: UserMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMediaCountAggregateInputType | true
    _min?: UserMediaMinAggregateInputType
    _max?: UserMediaMaxAggregateInputType
  }

  export type UserMediaGroupByOutputType = {
    id: string
    userId: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserMediaCountAggregateOutputType | null
    _min: UserMediaMinAggregateOutputType | null
    _max: UserMediaMaxAggregateOutputType | null
  }

  type GetUserMediaGroupByPayload<T extends UserMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMediaGroupByOutputType[P]>
            : GetScalarType<T[P], UserMediaGroupByOutputType[P]>
        }
      >
    >


  export type UserMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedia"]>

  export type UserMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedia"]>

  export type UserMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMedia"]>

  export type UserMediaSelectScalar = {
    id?: boolean
    userId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mediaType" | "visibility" | "url" | "publicId" | "isPrimary" | "createdAt" | "updatedAt", ExtArgs["result"]["userMedia"]>
  export type UserMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMedia"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mediaType: $Enums.UserMediaType
      visibility: $Enums.MediaVisibility
      url: string
      publicId: string
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userMedia"]>
    composites: {}
  }

  type UserMediaGetPayload<S extends boolean | null | undefined | UserMediaDefaultArgs> = $Result.GetResult<Prisma.$UserMediaPayload, S>

  type UserMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMediaCountAggregateInputType | true
    }

  export interface UserMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMedia'], meta: { name: 'UserMedia' } }
    /**
     * Find zero or one UserMedia that matches the filter.
     * @param {UserMediaFindUniqueArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMediaFindUniqueArgs>(args: SelectSubset<T, UserMediaFindUniqueArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMediaFindUniqueOrThrowArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaFindFirstArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMediaFindFirstArgs>(args?: SelectSubset<T, UserMediaFindFirstArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaFindFirstOrThrowArgs} args - Arguments to find a UserMedia
     * @example
     * // Get one UserMedia
     * const userMedia = await prisma.userMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMedias
     * const userMedias = await prisma.userMedia.findMany()
     * 
     * // Get first 10 UserMedias
     * const userMedias = await prisma.userMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMediaWithIdOnly = await prisma.userMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMediaFindManyArgs>(args?: SelectSubset<T, UserMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMedia.
     * @param {UserMediaCreateArgs} args - Arguments to create a UserMedia.
     * @example
     * // Create one UserMedia
     * const UserMedia = await prisma.userMedia.create({
     *   data: {
     *     // ... data to create a UserMedia
     *   }
     * })
     * 
     */
    create<T extends UserMediaCreateArgs>(args: SelectSubset<T, UserMediaCreateArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMedias.
     * @param {UserMediaCreateManyArgs} args - Arguments to create many UserMedias.
     * @example
     * // Create many UserMedias
     * const userMedia = await prisma.userMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMediaCreateManyArgs>(args?: SelectSubset<T, UserMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMedias and returns the data saved in the database.
     * @param {UserMediaCreateManyAndReturnArgs} args - Arguments to create many UserMedias.
     * @example
     * // Create many UserMedias
     * const userMedia = await prisma.userMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMedias and only return the `id`
     * const userMediaWithIdOnly = await prisma.userMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMedia.
     * @param {UserMediaDeleteArgs} args - Arguments to delete one UserMedia.
     * @example
     * // Delete one UserMedia
     * const UserMedia = await prisma.userMedia.delete({
     *   where: {
     *     // ... filter to delete one UserMedia
     *   }
     * })
     * 
     */
    delete<T extends UserMediaDeleteArgs>(args: SelectSubset<T, UserMediaDeleteArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMedia.
     * @param {UserMediaUpdateArgs} args - Arguments to update one UserMedia.
     * @example
     * // Update one UserMedia
     * const userMedia = await prisma.userMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMediaUpdateArgs>(args: SelectSubset<T, UserMediaUpdateArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMedias.
     * @param {UserMediaDeleteManyArgs} args - Arguments to filter UserMedias to delete.
     * @example
     * // Delete a few UserMedias
     * const { count } = await prisma.userMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMediaDeleteManyArgs>(args?: SelectSubset<T, UserMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMedias
     * const userMedia = await prisma.userMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMediaUpdateManyArgs>(args: SelectSubset<T, UserMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMedias and returns the data updated in the database.
     * @param {UserMediaUpdateManyAndReturnArgs} args - Arguments to update many UserMedias.
     * @example
     * // Update many UserMedias
     * const userMedia = await prisma.userMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMedias and only return the `id`
     * const userMediaWithIdOnly = await prisma.userMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMedia.
     * @param {UserMediaUpsertArgs} args - Arguments to update or create a UserMedia.
     * @example
     * // Update or create a UserMedia
     * const userMedia = await prisma.userMedia.upsert({
     *   create: {
     *     // ... data to create a UserMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMedia we want to update
     *   }
     * })
     */
    upsert<T extends UserMediaUpsertArgs>(args: SelectSubset<T, UserMediaUpsertArgs<ExtArgs>>): Prisma__UserMediaClient<$Result.GetResult<Prisma.$UserMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaCountArgs} args - Arguments to filter UserMedias to count.
     * @example
     * // Count the number of UserMedias
     * const count = await prisma.userMedia.count({
     *   where: {
     *     // ... the filter for the UserMedias we want to count
     *   }
     * })
    **/
    count<T extends UserMediaCountArgs>(
      args?: Subset<T, UserMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMediaAggregateArgs>(args: Subset<T, UserMediaAggregateArgs>): Prisma.PrismaPromise<GetUserMediaAggregateType<T>>

    /**
     * Group by UserMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMediaGroupByArgs['orderBy'] }
        : { orderBy?: UserMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMedia model
   */
  readonly fields: UserMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMedia model
   */
  interface UserMediaFieldRefs {
    readonly id: FieldRef<"UserMedia", 'String'>
    readonly userId: FieldRef<"UserMedia", 'String'>
    readonly mediaType: FieldRef<"UserMedia", 'UserMediaType'>
    readonly visibility: FieldRef<"UserMedia", 'MediaVisibility'>
    readonly url: FieldRef<"UserMedia", 'String'>
    readonly publicId: FieldRef<"UserMedia", 'String'>
    readonly isPrimary: FieldRef<"UserMedia", 'Boolean'>
    readonly createdAt: FieldRef<"UserMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"UserMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMedia findUnique
   */
  export type UserMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia findUniqueOrThrow
   */
  export type UserMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia findFirst
   */
  export type UserMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedias.
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedias.
     */
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * UserMedia findFirstOrThrow
   */
  export type UserMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedia to fetch.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMedias.
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedias.
     */
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * UserMedia findMany
   */
  export type UserMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter, which UserMedias to fetch.
     */
    where?: UserMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMedias to fetch.
     */
    orderBy?: UserMediaOrderByWithRelationInput | UserMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMedias.
     */
    cursor?: UserMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMedias.
     */
    distinct?: UserMediaScalarFieldEnum | UserMediaScalarFieldEnum[]
  }

  /**
   * UserMedia create
   */
  export type UserMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMedia.
     */
    data: XOR<UserMediaCreateInput, UserMediaUncheckedCreateInput>
  }

  /**
   * UserMedia createMany
   */
  export type UserMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMedias.
     */
    data: UserMediaCreateManyInput | UserMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMedia createManyAndReturn
   */
  export type UserMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * The data used to create many UserMedias.
     */
    data: UserMediaCreateManyInput | UserMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedia update
   */
  export type UserMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMedia.
     */
    data: XOR<UserMediaUpdateInput, UserMediaUncheckedUpdateInput>
    /**
     * Choose, which UserMedia to update.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia updateMany
   */
  export type UserMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMedias.
     */
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyInput>
    /**
     * Filter which UserMedias to update
     */
    where?: UserMediaWhereInput
    /**
     * Limit how many UserMedias to update.
     */
    limit?: number
  }

  /**
   * UserMedia updateManyAndReturn
   */
  export type UserMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * The data used to update UserMedias.
     */
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyInput>
    /**
     * Filter which UserMedias to update
     */
    where?: UserMediaWhereInput
    /**
     * Limit how many UserMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMedia upsert
   */
  export type UserMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMedia to update in case it exists.
     */
    where: UserMediaWhereUniqueInput
    /**
     * In case the UserMedia found by the `where` argument doesn't exist, create a new UserMedia with this data.
     */
    create: XOR<UserMediaCreateInput, UserMediaUncheckedCreateInput>
    /**
     * In case the UserMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMediaUpdateInput, UserMediaUncheckedUpdateInput>
  }

  /**
   * UserMedia delete
   */
  export type UserMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
    /**
     * Filter which UserMedia to delete.
     */
    where: UserMediaWhereUniqueInput
  }

  /**
   * UserMedia deleteMany
   */
  export type UserMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMedias to delete
     */
    where?: UserMediaWhereInput
    /**
     * Limit how many UserMedias to delete.
     */
    limit?: number
  }

  /**
   * UserMedia without action
   */
  export type UserMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMedia
     */
    select?: UserMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMedia
     */
    omit?: UserMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMediaInclude<ExtArgs> | null
  }


  /**
   * Model PersonProfile
   */

  export type AggregatePersonProfile = {
    _count: PersonProfileCountAggregateOutputType | null
    _avg: PersonProfileAvgAggregateOutputType | null
    _sum: PersonProfileSumAggregateOutputType | null
    _min: PersonProfileMinAggregateOutputType | null
    _max: PersonProfileMaxAggregateOutputType | null
  }

  export type PersonProfileAvgAggregateOutputType = {
    monthlyIncome: Decimal | null
    householdSize: number | null
  }

  export type PersonProfileSumAggregateOutputType = {
    monthlyIncome: Decimal | null
    householdSize: number | null
  }

  export type PersonProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    phone: string | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    employmentStatus: string | null
    monthlyIncome: Decimal | null
    householdSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fullName: string | null
    phone: string | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    employmentStatus: string | null
    monthlyIncome: Decimal | null
    householdSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonProfileCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    phone: number
    addressLine1: number
    suburb: number
    state: number
    postcode: number
    employmentStatus: number
    monthlyIncome: number
    householdSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonProfileAvgAggregateInputType = {
    monthlyIncome?: true
    householdSize?: true
  }

  export type PersonProfileSumAggregateInputType = {
    monthlyIncome?: true
    householdSize?: true
  }

  export type PersonProfileMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    phone?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    employmentStatus?: true
    monthlyIncome?: true
    householdSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    phone?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    employmentStatus?: true
    monthlyIncome?: true
    householdSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonProfileCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    phone?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    employmentStatus?: true
    monthlyIncome?: true
    householdSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonProfile to aggregate.
     */
    where?: PersonProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonProfiles to fetch.
     */
    orderBy?: PersonProfileOrderByWithRelationInput | PersonProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonProfiles
    **/
    _count?: true | PersonProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonProfileMaxAggregateInputType
  }

  export type GetPersonProfileAggregateType<T extends PersonProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonProfile[P]>
      : GetScalarType<T[P], AggregatePersonProfile[P]>
  }




  export type PersonProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonProfileWhereInput
    orderBy?: PersonProfileOrderByWithAggregationInput | PersonProfileOrderByWithAggregationInput[]
    by: PersonProfileScalarFieldEnum[] | PersonProfileScalarFieldEnum
    having?: PersonProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonProfileCountAggregateInputType | true
    _avg?: PersonProfileAvgAggregateInputType
    _sum?: PersonProfileSumAggregateInputType
    _min?: PersonProfileMinAggregateInputType
    _max?: PersonProfileMaxAggregateInputType
  }

  export type PersonProfileGroupByOutputType = {
    id: string
    userId: string
    fullName: string
    phone: string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    employmentStatus: string
    monthlyIncome: Decimal
    householdSize: number
    createdAt: Date
    updatedAt: Date
    _count: PersonProfileCountAggregateOutputType | null
    _avg: PersonProfileAvgAggregateOutputType | null
    _sum: PersonProfileSumAggregateOutputType | null
    _min: PersonProfileMinAggregateOutputType | null
    _max: PersonProfileMaxAggregateOutputType | null
  }

  type GetPersonProfileGroupByPayload<T extends PersonProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PersonProfileGroupByOutputType[P]>
        }
      >
    >


  export type PersonProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    employmentStatus?: boolean
    monthlyIncome?: boolean
    householdSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personProfile"]>

  export type PersonProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    employmentStatus?: boolean
    monthlyIncome?: boolean
    householdSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personProfile"]>

  export type PersonProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    employmentStatus?: boolean
    monthlyIncome?: boolean
    householdSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personProfile"]>

  export type PersonProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    employmentStatus?: boolean
    monthlyIncome?: boolean
    householdSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "phone" | "addressLine1" | "suburb" | "state" | "postcode" | "employmentStatus" | "monthlyIncome" | "householdSize" | "createdAt" | "updatedAt", ExtArgs["result"]["personProfile"]>
  export type PersonProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fullName: string
      phone: string
      addressLine1: string
      suburb: string
      state: string
      postcode: string
      employmentStatus: string
      monthlyIncome: Prisma.Decimal
      householdSize: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personProfile"]>
    composites: {}
  }

  type PersonProfileGetPayload<S extends boolean | null | undefined | PersonProfileDefaultArgs> = $Result.GetResult<Prisma.$PersonProfilePayload, S>

  type PersonProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonProfileCountAggregateInputType | true
    }

  export interface PersonProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonProfile'], meta: { name: 'PersonProfile' } }
    /**
     * Find zero or one PersonProfile that matches the filter.
     * @param {PersonProfileFindUniqueArgs} args - Arguments to find a PersonProfile
     * @example
     * // Get one PersonProfile
     * const personProfile = await prisma.personProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonProfileFindUniqueArgs>(args: SelectSubset<T, PersonProfileFindUniqueArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonProfileFindUniqueOrThrowArgs} args - Arguments to find a PersonProfile
     * @example
     * // Get one PersonProfile
     * const personProfile = await prisma.personProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileFindFirstArgs} args - Arguments to find a PersonProfile
     * @example
     * // Get one PersonProfile
     * const personProfile = await prisma.personProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonProfileFindFirstArgs>(args?: SelectSubset<T, PersonProfileFindFirstArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileFindFirstOrThrowArgs} args - Arguments to find a PersonProfile
     * @example
     * // Get one PersonProfile
     * const personProfile = await prisma.personProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonProfiles
     * const personProfiles = await prisma.personProfile.findMany()
     * 
     * // Get first 10 PersonProfiles
     * const personProfiles = await prisma.personProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personProfileWithIdOnly = await prisma.personProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonProfileFindManyArgs>(args?: SelectSubset<T, PersonProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonProfile.
     * @param {PersonProfileCreateArgs} args - Arguments to create a PersonProfile.
     * @example
     * // Create one PersonProfile
     * const PersonProfile = await prisma.personProfile.create({
     *   data: {
     *     // ... data to create a PersonProfile
     *   }
     * })
     * 
     */
    create<T extends PersonProfileCreateArgs>(args: SelectSubset<T, PersonProfileCreateArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonProfiles.
     * @param {PersonProfileCreateManyArgs} args - Arguments to create many PersonProfiles.
     * @example
     * // Create many PersonProfiles
     * const personProfile = await prisma.personProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonProfileCreateManyArgs>(args?: SelectSubset<T, PersonProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonProfiles and returns the data saved in the database.
     * @param {PersonProfileCreateManyAndReturnArgs} args - Arguments to create many PersonProfiles.
     * @example
     * // Create many PersonProfiles
     * const personProfile = await prisma.personProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonProfiles and only return the `id`
     * const personProfileWithIdOnly = await prisma.personProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonProfile.
     * @param {PersonProfileDeleteArgs} args - Arguments to delete one PersonProfile.
     * @example
     * // Delete one PersonProfile
     * const PersonProfile = await prisma.personProfile.delete({
     *   where: {
     *     // ... filter to delete one PersonProfile
     *   }
     * })
     * 
     */
    delete<T extends PersonProfileDeleteArgs>(args: SelectSubset<T, PersonProfileDeleteArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonProfile.
     * @param {PersonProfileUpdateArgs} args - Arguments to update one PersonProfile.
     * @example
     * // Update one PersonProfile
     * const personProfile = await prisma.personProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonProfileUpdateArgs>(args: SelectSubset<T, PersonProfileUpdateArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonProfiles.
     * @param {PersonProfileDeleteManyArgs} args - Arguments to filter PersonProfiles to delete.
     * @example
     * // Delete a few PersonProfiles
     * const { count } = await prisma.personProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonProfileDeleteManyArgs>(args?: SelectSubset<T, PersonProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonProfiles
     * const personProfile = await prisma.personProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonProfileUpdateManyArgs>(args: SelectSubset<T, PersonProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonProfiles and returns the data updated in the database.
     * @param {PersonProfileUpdateManyAndReturnArgs} args - Arguments to update many PersonProfiles.
     * @example
     * // Update many PersonProfiles
     * const personProfile = await prisma.personProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonProfiles and only return the `id`
     * const personProfileWithIdOnly = await prisma.personProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonProfile.
     * @param {PersonProfileUpsertArgs} args - Arguments to update or create a PersonProfile.
     * @example
     * // Update or create a PersonProfile
     * const personProfile = await prisma.personProfile.upsert({
     *   create: {
     *     // ... data to create a PersonProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonProfile we want to update
     *   }
     * })
     */
    upsert<T extends PersonProfileUpsertArgs>(args: SelectSubset<T, PersonProfileUpsertArgs<ExtArgs>>): Prisma__PersonProfileClient<$Result.GetResult<Prisma.$PersonProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileCountArgs} args - Arguments to filter PersonProfiles to count.
     * @example
     * // Count the number of PersonProfiles
     * const count = await prisma.personProfile.count({
     *   where: {
     *     // ... the filter for the PersonProfiles we want to count
     *   }
     * })
    **/
    count<T extends PersonProfileCountArgs>(
      args?: Subset<T, PersonProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonProfileAggregateArgs>(args: Subset<T, PersonProfileAggregateArgs>): Prisma.PrismaPromise<GetPersonProfileAggregateType<T>>

    /**
     * Group by PersonProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonProfileGroupByArgs['orderBy'] }
        : { orderBy?: PersonProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonProfile model
   */
  readonly fields: PersonProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonProfile model
   */
  interface PersonProfileFieldRefs {
    readonly id: FieldRef<"PersonProfile", 'String'>
    readonly userId: FieldRef<"PersonProfile", 'String'>
    readonly fullName: FieldRef<"PersonProfile", 'String'>
    readonly phone: FieldRef<"PersonProfile", 'String'>
    readonly addressLine1: FieldRef<"PersonProfile", 'String'>
    readonly suburb: FieldRef<"PersonProfile", 'String'>
    readonly state: FieldRef<"PersonProfile", 'String'>
    readonly postcode: FieldRef<"PersonProfile", 'String'>
    readonly employmentStatus: FieldRef<"PersonProfile", 'String'>
    readonly monthlyIncome: FieldRef<"PersonProfile", 'Decimal'>
    readonly householdSize: FieldRef<"PersonProfile", 'Int'>
    readonly createdAt: FieldRef<"PersonProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"PersonProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonProfile findUnique
   */
  export type PersonProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * Filter, which PersonProfile to fetch.
     */
    where: PersonProfileWhereUniqueInput
  }

  /**
   * PersonProfile findUniqueOrThrow
   */
  export type PersonProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * Filter, which PersonProfile to fetch.
     */
    where: PersonProfileWhereUniqueInput
  }

  /**
   * PersonProfile findFirst
   */
  export type PersonProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * Filter, which PersonProfile to fetch.
     */
    where?: PersonProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonProfiles to fetch.
     */
    orderBy?: PersonProfileOrderByWithRelationInput | PersonProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonProfiles.
     */
    cursor?: PersonProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonProfiles.
     */
    distinct?: PersonProfileScalarFieldEnum | PersonProfileScalarFieldEnum[]
  }

  /**
   * PersonProfile findFirstOrThrow
   */
  export type PersonProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * Filter, which PersonProfile to fetch.
     */
    where?: PersonProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonProfiles to fetch.
     */
    orderBy?: PersonProfileOrderByWithRelationInput | PersonProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonProfiles.
     */
    cursor?: PersonProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonProfiles.
     */
    distinct?: PersonProfileScalarFieldEnum | PersonProfileScalarFieldEnum[]
  }

  /**
   * PersonProfile findMany
   */
  export type PersonProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * Filter, which PersonProfiles to fetch.
     */
    where?: PersonProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonProfiles to fetch.
     */
    orderBy?: PersonProfileOrderByWithRelationInput | PersonProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonProfiles.
     */
    cursor?: PersonProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonProfiles.
     */
    distinct?: PersonProfileScalarFieldEnum | PersonProfileScalarFieldEnum[]
  }

  /**
   * PersonProfile create
   */
  export type PersonProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonProfile.
     */
    data: XOR<PersonProfileCreateInput, PersonProfileUncheckedCreateInput>
  }

  /**
   * PersonProfile createMany
   */
  export type PersonProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonProfiles.
     */
    data: PersonProfileCreateManyInput | PersonProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonProfile createManyAndReturn
   */
  export type PersonProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PersonProfiles.
     */
    data: PersonProfileCreateManyInput | PersonProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonProfile update
   */
  export type PersonProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonProfile.
     */
    data: XOR<PersonProfileUpdateInput, PersonProfileUncheckedUpdateInput>
    /**
     * Choose, which PersonProfile to update.
     */
    where: PersonProfileWhereUniqueInput
  }

  /**
   * PersonProfile updateMany
   */
  export type PersonProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonProfiles.
     */
    data: XOR<PersonProfileUpdateManyMutationInput, PersonProfileUncheckedUpdateManyInput>
    /**
     * Filter which PersonProfiles to update
     */
    where?: PersonProfileWhereInput
    /**
     * Limit how many PersonProfiles to update.
     */
    limit?: number
  }

  /**
   * PersonProfile updateManyAndReturn
   */
  export type PersonProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * The data used to update PersonProfiles.
     */
    data: XOR<PersonProfileUpdateManyMutationInput, PersonProfileUncheckedUpdateManyInput>
    /**
     * Filter which PersonProfiles to update
     */
    where?: PersonProfileWhereInput
    /**
     * Limit how many PersonProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonProfile upsert
   */
  export type PersonProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonProfile to update in case it exists.
     */
    where: PersonProfileWhereUniqueInput
    /**
     * In case the PersonProfile found by the `where` argument doesn't exist, create a new PersonProfile with this data.
     */
    create: XOR<PersonProfileCreateInput, PersonProfileUncheckedCreateInput>
    /**
     * In case the PersonProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonProfileUpdateInput, PersonProfileUncheckedUpdateInput>
  }

  /**
   * PersonProfile delete
   */
  export type PersonProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
    /**
     * Filter which PersonProfile to delete.
     */
    where: PersonProfileWhereUniqueInput
  }

  /**
   * PersonProfile deleteMany
   */
  export type PersonProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonProfiles to delete
     */
    where?: PersonProfileWhereInput
    /**
     * Limit how many PersonProfiles to delete.
     */
    limit?: number
  }

  /**
   * PersonProfile without action
   */
  export type PersonProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonProfile
     */
    select?: PersonProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonProfile
     */
    omit?: PersonProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonProfileInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: Decimal | null
    bedrooms: number | null
    bathrooms: number | null
    parkingSpaces: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: Decimal | null
    bedrooms: number | null
    bathrooms: number | null
    parkingSpaces: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    listingType: $Enums.ListingType | null
    propertyType: $Enums.PropertyType | null
    price: Decimal | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    bedrooms: number | null
    bathrooms: number | null
    parkingSpaces: number | null
    isPublished: boolean | null
    createdById: string | null
    agencyId: string | null
    assignedAgentMemberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    listingType: $Enums.ListingType | null
    propertyType: $Enums.PropertyType | null
    price: Decimal | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    bedrooms: number | null
    bathrooms: number | null
    parkingSpaces: number | null
    isPublished: boolean | null
    createdById: string | null
    agencyId: string | null
    assignedAgentMemberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    listingType: number
    propertyType: number
    price: number
    addressLine1: number
    suburb: number
    state: number
    postcode: number
    bedrooms: number
    bathrooms: number
    parkingSpaces: number
    isPublished: number
    createdById: number
    agencyId: number
    assignedAgentMemberId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    parkingSpaces?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    parkingSpaces?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    listingType?: true
    propertyType?: true
    price?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    bedrooms?: true
    bathrooms?: true
    parkingSpaces?: true
    isPublished?: true
    createdById?: true
    agencyId?: true
    assignedAgentMemberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    listingType?: true
    propertyType?: true
    price?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    bedrooms?: true
    bathrooms?: true
    parkingSpaces?: true
    isPublished?: true
    createdById?: true
    agencyId?: true
    assignedAgentMemberId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    listingType?: true
    propertyType?: true
    price?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    bedrooms?: true
    bathrooms?: true
    parkingSpaces?: true
    isPublished?: true
    createdById?: true
    agencyId?: true
    assignedAgentMemberId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms: number | null
    bathrooms: number | null
    parkingSpaces: number | null
    isPublished: boolean
    createdById: string
    agencyId: string | null
    assignedAgentMemberId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    listingType?: boolean
    propertyType?: boolean
    price?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    parkingSpaces?: boolean
    isPublished?: boolean
    createdById?: boolean
    agencyId?: boolean
    assignedAgentMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    agency?: boolean | Property$agencyArgs<ExtArgs>
    assignedAgentMember?: boolean | Property$assignedAgentMemberArgs<ExtArgs>
    application?: boolean | Property$applicationArgs<ExtArgs>
    media?: boolean | Property$mediaArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    listingType?: boolean
    propertyType?: boolean
    price?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    parkingSpaces?: boolean
    isPublished?: boolean
    createdById?: boolean
    agencyId?: boolean
    assignedAgentMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    agency?: boolean | Property$agencyArgs<ExtArgs>
    assignedAgentMember?: boolean | Property$assignedAgentMemberArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    listingType?: boolean
    propertyType?: boolean
    price?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    parkingSpaces?: boolean
    isPublished?: boolean
    createdById?: boolean
    agencyId?: boolean
    assignedAgentMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    agency?: boolean | Property$agencyArgs<ExtArgs>
    assignedAgentMember?: boolean | Property$assignedAgentMemberArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    listingType?: boolean
    propertyType?: boolean
    price?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    parkingSpaces?: boolean
    isPublished?: boolean
    createdById?: boolean
    agencyId?: boolean
    assignedAgentMemberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "listingType" | "propertyType" | "price" | "addressLine1" | "suburb" | "state" | "postcode" | "bedrooms" | "bathrooms" | "parkingSpaces" | "isPublished" | "createdById" | "agencyId" | "assignedAgentMemberId" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    agency?: boolean | Property$agencyArgs<ExtArgs>
    assignedAgentMember?: boolean | Property$assignedAgentMemberArgs<ExtArgs>
    application?: boolean | Property$applicationArgs<ExtArgs>
    media?: boolean | Property$mediaArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    agency?: boolean | Property$agencyArgs<ExtArgs>
    assignedAgentMember?: boolean | Property$assignedAgentMemberArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    agency?: boolean | Property$agencyArgs<ExtArgs>
    assignedAgentMember?: boolean | Property$assignedAgentMemberArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      agency: Prisma.$AgencyPayload<ExtArgs> | null
      assignedAgentMember: Prisma.$AgencyMemberPayload<ExtArgs> | null
      application: Prisma.$ApplicationPayload<ExtArgs>[]
      media: Prisma.$PropertyMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      listingType: $Enums.ListingType
      propertyType: $Enums.PropertyType
      price: Prisma.Decimal
      addressLine1: string
      suburb: string
      state: string
      postcode: string
      bedrooms: number | null
      bathrooms: number | null
      parkingSpaces: number | null
      isPublished: boolean
      createdById: string
      agencyId: string | null
      assignedAgentMemberId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agency<T extends Property$agencyArgs<ExtArgs> = {}>(args?: Subset<T, Property$agencyArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedAgentMember<T extends Property$assignedAgentMemberArgs<ExtArgs> = {}>(args?: Subset<T, Property$assignedAgentMemberArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    application<T extends Property$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Property$applicationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Property$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Property$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly listingType: FieldRef<"Property", 'ListingType'>
    readonly propertyType: FieldRef<"Property", 'PropertyType'>
    readonly price: FieldRef<"Property", 'Decimal'>
    readonly addressLine1: FieldRef<"Property", 'String'>
    readonly suburb: FieldRef<"Property", 'String'>
    readonly state: FieldRef<"Property", 'String'>
    readonly postcode: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly parkingSpaces: FieldRef<"Property", 'Int'>
    readonly isPublished: FieldRef<"Property", 'Boolean'>
    readonly createdById: FieldRef<"Property", 'String'>
    readonly agencyId: FieldRef<"Property", 'String'>
    readonly assignedAgentMemberId: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.agency
   */
  export type Property$agencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    where?: AgencyWhereInput
  }

  /**
   * Property.assignedAgentMember
   */
  export type Property$assignedAgentMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    where?: AgencyMemberWhereInput
  }

  /**
   * Property.application
   */
  export type Property$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Property.media
   */
  export type Property$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    where?: PropertyMediaWhereInput
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    cursor?: PropertyMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    applicantId: string | null
    status: $Enums.ApplicationStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    applicantId: string | null
    status: $Enums.ApplicationStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    propertyId: number
    applicantId: number
    status: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    propertyId?: true
    applicantId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    propertyId?: true
    applicantId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    propertyId?: true
    applicantId?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    propertyId: string
    applicantId: string
    status: $Enums.ApplicationStatus
    message: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    propertyId?: boolean
    applicantId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "applicantId" | "status" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      applicantId: string
      status: $Enums.ApplicationStatus
      message: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly propertyId: FieldRef<"Application", 'String'>
    readonly applicantId: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly message: FieldRef<"Application", 'String'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly userId: FieldRef<"EmailVerificationToken", 'String'>
    readonly token: FieldRef<"EmailVerificationToken", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly usedAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model PropertyMedia
   */

  export type AggregatePropertyMedia = {
    _count: PropertyMediaCountAggregateOutputType | null
    _avg: PropertyMediaAvgAggregateOutputType | null
    _sum: PropertyMediaSumAggregateOutputType | null
    _min: PropertyMediaMinAggregateOutputType | null
    _max: PropertyMediaMaxAggregateOutputType | null
  }

  export type PropertyMediaAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PropertyMediaSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PropertyMediaMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    mediaType: $Enums.PropertyMediaType | null
    visibility: $Enums.MediaVisibility | null
    url: string | null
    publicId: string | null
    isPrimary: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMediaMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    mediaType: $Enums.PropertyMediaType | null
    visibility: $Enums.MediaVisibility | null
    url: string | null
    publicId: string | null
    isPrimary: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMediaCountAggregateOutputType = {
    id: number
    propertyId: number
    mediaType: number
    visibility: number
    url: number
    publicId: number
    isPrimary: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyMediaAvgAggregateInputType = {
    sortOrder?: true
  }

  export type PropertyMediaSumAggregateInputType = {
    sortOrder?: true
  }

  export type PropertyMediaMinAggregateInputType = {
    id?: true
    propertyId?: true
    mediaType?: true
    visibility?: true
    url?: true
    publicId?: true
    isPrimary?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMediaMaxAggregateInputType = {
    id?: true
    propertyId?: true
    mediaType?: true
    visibility?: true
    url?: true
    publicId?: true
    isPrimary?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMediaCountAggregateInputType = {
    id?: true
    propertyId?: true
    mediaType?: true
    visibility?: true
    url?: true
    publicId?: true
    isPrimary?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyMedia to aggregate.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyMedias
    **/
    _count?: true | PropertyMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMediaMaxAggregateInputType
  }

  export type GetPropertyMediaAggregateType<T extends PropertyMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyMedia[P]>
      : GetScalarType<T[P], AggregatePropertyMedia[P]>
  }




  export type PropertyMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyMediaWhereInput
    orderBy?: PropertyMediaOrderByWithAggregationInput | PropertyMediaOrderByWithAggregationInput[]
    by: PropertyMediaScalarFieldEnum[] | PropertyMediaScalarFieldEnum
    having?: PropertyMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyMediaCountAggregateInputType | true
    _avg?: PropertyMediaAvgAggregateInputType
    _sum?: PropertyMediaSumAggregateInputType
    _min?: PropertyMediaMinAggregateInputType
    _max?: PropertyMediaMaxAggregateInputType
  }

  export type PropertyMediaGroupByOutputType = {
    id: string
    propertyId: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: PropertyMediaCountAggregateOutputType | null
    _avg: PropertyMediaAvgAggregateOutputType | null
    _sum: PropertyMediaSumAggregateOutputType | null
    _min: PropertyMediaMinAggregateOutputType | null
    _max: PropertyMediaMaxAggregateOutputType | null
  }

  type GetPropertyMediaGroupByPayload<T extends PropertyMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyMediaGroupByOutputType[P]>
        }
      >
    >


  export type PropertyMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMedia"]>

  export type PropertyMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMedia"]>

  export type PropertyMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyMedia"]>

  export type PropertyMediaSelectScalar = {
    id?: boolean
    propertyId?: boolean
    mediaType?: boolean
    visibility?: boolean
    url?: boolean
    publicId?: boolean
    isPrimary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "mediaType" | "visibility" | "url" | "publicId" | "isPrimary" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyMedia"]>
  export type PropertyMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyMedia"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      mediaType: $Enums.PropertyMediaType
      visibility: $Enums.MediaVisibility
      url: string
      publicId: string
      isPrimary: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyMedia"]>
    composites: {}
  }

  type PropertyMediaGetPayload<S extends boolean | null | undefined | PropertyMediaDefaultArgs> = $Result.GetResult<Prisma.$PropertyMediaPayload, S>

  type PropertyMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyMediaCountAggregateInputType | true
    }

  export interface PropertyMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyMedia'], meta: { name: 'PropertyMedia' } }
    /**
     * Find zero or one PropertyMedia that matches the filter.
     * @param {PropertyMediaFindUniqueArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyMediaFindUniqueArgs>(args: SelectSubset<T, PropertyMediaFindUniqueArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyMediaFindUniqueOrThrowArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaFindFirstArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyMediaFindFirstArgs>(args?: SelectSubset<T, PropertyMediaFindFirstArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaFindFirstOrThrowArgs} args - Arguments to find a PropertyMedia
     * @example
     * // Get one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyMedias
     * const propertyMedias = await prisma.propertyMedia.findMany()
     * 
     * // Get first 10 PropertyMedias
     * const propertyMedias = await prisma.propertyMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyMediaWithIdOnly = await prisma.propertyMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyMediaFindManyArgs>(args?: SelectSubset<T, PropertyMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyMedia.
     * @param {PropertyMediaCreateArgs} args - Arguments to create a PropertyMedia.
     * @example
     * // Create one PropertyMedia
     * const PropertyMedia = await prisma.propertyMedia.create({
     *   data: {
     *     // ... data to create a PropertyMedia
     *   }
     * })
     * 
     */
    create<T extends PropertyMediaCreateArgs>(args: SelectSubset<T, PropertyMediaCreateArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyMedias.
     * @param {PropertyMediaCreateManyArgs} args - Arguments to create many PropertyMedias.
     * @example
     * // Create many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyMediaCreateManyArgs>(args?: SelectSubset<T, PropertyMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyMedias and returns the data saved in the database.
     * @param {PropertyMediaCreateManyAndReturnArgs} args - Arguments to create many PropertyMedias.
     * @example
     * // Create many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyMedias and only return the `id`
     * const propertyMediaWithIdOnly = await prisma.propertyMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyMedia.
     * @param {PropertyMediaDeleteArgs} args - Arguments to delete one PropertyMedia.
     * @example
     * // Delete one PropertyMedia
     * const PropertyMedia = await prisma.propertyMedia.delete({
     *   where: {
     *     // ... filter to delete one PropertyMedia
     *   }
     * })
     * 
     */
    delete<T extends PropertyMediaDeleteArgs>(args: SelectSubset<T, PropertyMediaDeleteArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyMedia.
     * @param {PropertyMediaUpdateArgs} args - Arguments to update one PropertyMedia.
     * @example
     * // Update one PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyMediaUpdateArgs>(args: SelectSubset<T, PropertyMediaUpdateArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyMedias.
     * @param {PropertyMediaDeleteManyArgs} args - Arguments to filter PropertyMedias to delete.
     * @example
     * // Delete a few PropertyMedias
     * const { count } = await prisma.propertyMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyMediaDeleteManyArgs>(args?: SelectSubset<T, PropertyMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyMediaUpdateManyArgs>(args: SelectSubset<T, PropertyMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyMedias and returns the data updated in the database.
     * @param {PropertyMediaUpdateManyAndReturnArgs} args - Arguments to update many PropertyMedias.
     * @example
     * // Update many PropertyMedias
     * const propertyMedia = await prisma.propertyMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyMedias and only return the `id`
     * const propertyMediaWithIdOnly = await prisma.propertyMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyMedia.
     * @param {PropertyMediaUpsertArgs} args - Arguments to update or create a PropertyMedia.
     * @example
     * // Update or create a PropertyMedia
     * const propertyMedia = await prisma.propertyMedia.upsert({
     *   create: {
     *     // ... data to create a PropertyMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyMedia we want to update
     *   }
     * })
     */
    upsert<T extends PropertyMediaUpsertArgs>(args: SelectSubset<T, PropertyMediaUpsertArgs<ExtArgs>>): Prisma__PropertyMediaClient<$Result.GetResult<Prisma.$PropertyMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaCountArgs} args - Arguments to filter PropertyMedias to count.
     * @example
     * // Count the number of PropertyMedias
     * const count = await prisma.propertyMedia.count({
     *   where: {
     *     // ... the filter for the PropertyMedias we want to count
     *   }
     * })
    **/
    count<T extends PropertyMediaCountArgs>(
      args?: Subset<T, PropertyMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyMediaAggregateArgs>(args: Subset<T, PropertyMediaAggregateArgs>): Prisma.PrismaPromise<GetPropertyMediaAggregateType<T>>

    /**
     * Group by PropertyMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyMediaGroupByArgs['orderBy'] }
        : { orderBy?: PropertyMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyMedia model
   */
  readonly fields: PropertyMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyMedia model
   */
  interface PropertyMediaFieldRefs {
    readonly id: FieldRef<"PropertyMedia", 'String'>
    readonly propertyId: FieldRef<"PropertyMedia", 'String'>
    readonly mediaType: FieldRef<"PropertyMedia", 'PropertyMediaType'>
    readonly visibility: FieldRef<"PropertyMedia", 'MediaVisibility'>
    readonly url: FieldRef<"PropertyMedia", 'String'>
    readonly publicId: FieldRef<"PropertyMedia", 'String'>
    readonly isPrimary: FieldRef<"PropertyMedia", 'Boolean'>
    readonly sortOrder: FieldRef<"PropertyMedia", 'Int'>
    readonly createdAt: FieldRef<"PropertyMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyMedia findUnique
   */
  export type PropertyMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia findUniqueOrThrow
   */
  export type PropertyMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia findFirst
   */
  export type PropertyMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyMedias.
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMedias.
     */
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * PropertyMedia findFirstOrThrow
   */
  export type PropertyMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedia to fetch.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyMedias.
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMedias.
     */
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * PropertyMedia findMany
   */
  export type PropertyMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter, which PropertyMedias to fetch.
     */
    where?: PropertyMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyMedias to fetch.
     */
    orderBy?: PropertyMediaOrderByWithRelationInput | PropertyMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyMedias.
     */
    cursor?: PropertyMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyMedias.
     */
    distinct?: PropertyMediaScalarFieldEnum | PropertyMediaScalarFieldEnum[]
  }

  /**
   * PropertyMedia create
   */
  export type PropertyMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyMedia.
     */
    data: XOR<PropertyMediaCreateInput, PropertyMediaUncheckedCreateInput>
  }

  /**
   * PropertyMedia createMany
   */
  export type PropertyMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyMedias.
     */
    data: PropertyMediaCreateManyInput | PropertyMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyMedia createManyAndReturn
   */
  export type PropertyMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyMedias.
     */
    data: PropertyMediaCreateManyInput | PropertyMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyMedia update
   */
  export type PropertyMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyMedia.
     */
    data: XOR<PropertyMediaUpdateInput, PropertyMediaUncheckedUpdateInput>
    /**
     * Choose, which PropertyMedia to update.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia updateMany
   */
  export type PropertyMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyMedias.
     */
    data: XOR<PropertyMediaUpdateManyMutationInput, PropertyMediaUncheckedUpdateManyInput>
    /**
     * Filter which PropertyMedias to update
     */
    where?: PropertyMediaWhereInput
    /**
     * Limit how many PropertyMedias to update.
     */
    limit?: number
  }

  /**
   * PropertyMedia updateManyAndReturn
   */
  export type PropertyMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * The data used to update PropertyMedias.
     */
    data: XOR<PropertyMediaUpdateManyMutationInput, PropertyMediaUncheckedUpdateManyInput>
    /**
     * Filter which PropertyMedias to update
     */
    where?: PropertyMediaWhereInput
    /**
     * Limit how many PropertyMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyMedia upsert
   */
  export type PropertyMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyMedia to update in case it exists.
     */
    where: PropertyMediaWhereUniqueInput
    /**
     * In case the PropertyMedia found by the `where` argument doesn't exist, create a new PropertyMedia with this data.
     */
    create: XOR<PropertyMediaCreateInput, PropertyMediaUncheckedCreateInput>
    /**
     * In case the PropertyMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyMediaUpdateInput, PropertyMediaUncheckedUpdateInput>
  }

  /**
   * PropertyMedia delete
   */
  export type PropertyMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
    /**
     * Filter which PropertyMedia to delete.
     */
    where: PropertyMediaWhereUniqueInput
  }

  /**
   * PropertyMedia deleteMany
   */
  export type PropertyMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyMedias to delete
     */
    where?: PropertyMediaWhereInput
    /**
     * Limit how many PropertyMedias to delete.
     */
    limit?: number
  }

  /**
   * PropertyMedia without action
   */
  export type PropertyMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyMedia
     */
    select?: PropertyMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyMedia
     */
    omit?: PropertyMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyMediaInclude<ExtArgs> | null
  }


  /**
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    status: $Enums.AgencyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    status: $Enums.AgencyStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    phone: number
    addressLine1: number
    suburb: number
    state: number
    postcode: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgencyMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    addressLine1?: true
    suburb?: true
    state?: true
    postcode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string
    phone: string | null
    addressLine1: string | null
    suburb: string | null
    state: string | null
    postcode: string | null
    status: $Enums.AgencyStatus
    createdAt: Date
    updatedAt: Date
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Agency$membersArgs<ExtArgs>
    property?: boolean | Agency$propertyArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    addressLine1?: boolean
    suburb?: boolean
    state?: boolean
    postcode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "phone" | "addressLine1" | "suburb" | "state" | "postcode" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["agency"]>
  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Agency$membersArgs<ExtArgs>
    property?: boolean | Agency$propertyArgs<ExtArgs>
    _count?: boolean | AgencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      members: Prisma.$AgencyMemberPayload<ExtArgs>[]
      property: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string
      phone: string | null
      addressLine1: string | null
      suburb: string | null
      state: string | null
      postcode: string | null
      status: $Enums.AgencyStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies and returns the data updated in the database.
     * @param {AgencyUpdateManyAndReturnArgs} args - Arguments to update many Agencies.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgencyUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Agency$membersArgs<ExtArgs> = {}>(args?: Subset<T, Agency$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property<T extends Agency$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Agency$propertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agency model
   */
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly name: FieldRef<"Agency", 'String'>
    readonly slug: FieldRef<"Agency", 'String'>
    readonly email: FieldRef<"Agency", 'String'>
    readonly phone: FieldRef<"Agency", 'String'>
    readonly addressLine1: FieldRef<"Agency", 'String'>
    readonly suburb: FieldRef<"Agency", 'String'>
    readonly state: FieldRef<"Agency", 'String'>
    readonly postcode: FieldRef<"Agency", 'String'>
    readonly status: FieldRef<"Agency", 'AgencyStatus'>
    readonly createdAt: FieldRef<"Agency", 'DateTime'>
    readonly updatedAt: FieldRef<"Agency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency updateManyAndReturn
   */
  export type AgencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to delete.
     */
    limit?: number
  }

  /**
   * Agency.members
   */
  export type Agency$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    where?: AgencyMemberWhereInput
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    cursor?: AgencyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * Agency.property
   */
  export type Agency$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model AgencyMember
   */

  export type AggregateAgencyMember = {
    _count: AgencyMemberCountAggregateOutputType | null
    _min: AgencyMemberMinAggregateOutputType | null
    _max: AgencyMemberMaxAggregateOutputType | null
  }

  export type AgencyMemberMinAggregateOutputType = {
    id: string | null
    agencyId: string | null
    userId: string | null
    role: $Enums.AgencyMemberRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgencyMemberMaxAggregateOutputType = {
    id: string | null
    agencyId: string | null
    userId: string | null
    role: $Enums.AgencyMemberRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgencyMemberCountAggregateOutputType = {
    id: number
    agencyId: number
    userId: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgencyMemberMinAggregateInputType = {
    id?: true
    agencyId?: true
    userId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgencyMemberMaxAggregateInputType = {
    id?: true
    agencyId?: true
    userId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgencyMemberCountAggregateInputType = {
    id?: true
    agencyId?: true
    userId?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgencyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyMember to aggregate.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgencyMembers
    **/
    _count?: true | AgencyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMemberMaxAggregateInputType
  }

  export type GetAgencyMemberAggregateType<T extends AgencyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateAgencyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgencyMember[P]>
      : GetScalarType<T[P], AggregateAgencyMember[P]>
  }




  export type AgencyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyMemberWhereInput
    orderBy?: AgencyMemberOrderByWithAggregationInput | AgencyMemberOrderByWithAggregationInput[]
    by: AgencyMemberScalarFieldEnum[] | AgencyMemberScalarFieldEnum
    having?: AgencyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyMemberCountAggregateInputType | true
    _min?: AgencyMemberMinAggregateInputType
    _max?: AgencyMemberMaxAggregateInputType
  }

  export type AgencyMemberGroupByOutputType = {
    id: string
    agencyId: string
    userId: string
    role: $Enums.AgencyMemberRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AgencyMemberCountAggregateOutputType | null
    _min: AgencyMemberMinAggregateOutputType | null
    _max: AgencyMemberMaxAggregateOutputType | null
  }

  type GetAgencyMemberGroupByPayload<T extends AgencyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyMemberGroupByOutputType[P]>
        }
      >
    >


  export type AgencyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedProperties?: boolean | AgencyMember$assignedPropertiesArgs<ExtArgs>
    _count?: boolean | AgencyMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyMember"]>

  export type AgencyMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyMember"]>

  export type AgencyMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agencyId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agencyMember"]>

  export type AgencyMemberSelectScalar = {
    id?: boolean
    agencyId?: boolean
    userId?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgencyMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agencyId" | "userId" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["agencyMember"]>
  export type AgencyMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedProperties?: boolean | AgencyMember$assignedPropertiesArgs<ExtArgs>
    _count?: boolean | AgencyMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencyMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgencyMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgencyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgencyMember"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      assignedProperties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agencyId: string
      userId: string
      role: $Enums.AgencyMemberRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agencyMember"]>
    composites: {}
  }

  type AgencyMemberGetPayload<S extends boolean | null | undefined | AgencyMemberDefaultArgs> = $Result.GetResult<Prisma.$AgencyMemberPayload, S>

  type AgencyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyMemberCountAggregateInputType | true
    }

  export interface AgencyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgencyMember'], meta: { name: 'AgencyMember' } }
    /**
     * Find zero or one AgencyMember that matches the filter.
     * @param {AgencyMemberFindUniqueArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyMemberFindUniqueArgs>(args: SelectSubset<T, AgencyMemberFindUniqueArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgencyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyMemberFindUniqueOrThrowArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgencyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberFindFirstArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyMemberFindFirstArgs>(args?: SelectSubset<T, AgencyMemberFindFirstArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgencyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberFindFirstOrThrowArgs} args - Arguments to find a AgencyMember
     * @example
     * // Get one AgencyMember
     * const agencyMember = await prisma.agencyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgencyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgencyMembers
     * const agencyMembers = await prisma.agencyMember.findMany()
     * 
     * // Get first 10 AgencyMembers
     * const agencyMembers = await prisma.agencyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyMemberWithIdOnly = await prisma.agencyMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyMemberFindManyArgs>(args?: SelectSubset<T, AgencyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgencyMember.
     * @param {AgencyMemberCreateArgs} args - Arguments to create a AgencyMember.
     * @example
     * // Create one AgencyMember
     * const AgencyMember = await prisma.agencyMember.create({
     *   data: {
     *     // ... data to create a AgencyMember
     *   }
     * })
     * 
     */
    create<T extends AgencyMemberCreateArgs>(args: SelectSubset<T, AgencyMemberCreateArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgencyMembers.
     * @param {AgencyMemberCreateManyArgs} args - Arguments to create many AgencyMembers.
     * @example
     * // Create many AgencyMembers
     * const agencyMember = await prisma.agencyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyMemberCreateManyArgs>(args?: SelectSubset<T, AgencyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgencyMembers and returns the data saved in the database.
     * @param {AgencyMemberCreateManyAndReturnArgs} args - Arguments to create many AgencyMembers.
     * @example
     * // Create many AgencyMembers
     * const agencyMember = await prisma.agencyMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgencyMembers and only return the `id`
     * const agencyMemberWithIdOnly = await prisma.agencyMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgencyMember.
     * @param {AgencyMemberDeleteArgs} args - Arguments to delete one AgencyMember.
     * @example
     * // Delete one AgencyMember
     * const AgencyMember = await prisma.agencyMember.delete({
     *   where: {
     *     // ... filter to delete one AgencyMember
     *   }
     * })
     * 
     */
    delete<T extends AgencyMemberDeleteArgs>(args: SelectSubset<T, AgencyMemberDeleteArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgencyMember.
     * @param {AgencyMemberUpdateArgs} args - Arguments to update one AgencyMember.
     * @example
     * // Update one AgencyMember
     * const agencyMember = await prisma.agencyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyMemberUpdateArgs>(args: SelectSubset<T, AgencyMemberUpdateArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgencyMembers.
     * @param {AgencyMemberDeleteManyArgs} args - Arguments to filter AgencyMembers to delete.
     * @example
     * // Delete a few AgencyMembers
     * const { count } = await prisma.agencyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyMemberDeleteManyArgs>(args?: SelectSubset<T, AgencyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgencyMembers
     * const agencyMember = await prisma.agencyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyMemberUpdateManyArgs>(args: SelectSubset<T, AgencyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgencyMembers and returns the data updated in the database.
     * @param {AgencyMemberUpdateManyAndReturnArgs} args - Arguments to update many AgencyMembers.
     * @example
     * // Update many AgencyMembers
     * const agencyMember = await prisma.agencyMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgencyMembers and only return the `id`
     * const agencyMemberWithIdOnly = await prisma.agencyMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgencyMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgencyMember.
     * @param {AgencyMemberUpsertArgs} args - Arguments to update or create a AgencyMember.
     * @example
     * // Update or create a AgencyMember
     * const agencyMember = await prisma.agencyMember.upsert({
     *   create: {
     *     // ... data to create a AgencyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgencyMember we want to update
     *   }
     * })
     */
    upsert<T extends AgencyMemberUpsertArgs>(args: SelectSubset<T, AgencyMemberUpsertArgs<ExtArgs>>): Prisma__AgencyMemberClient<$Result.GetResult<Prisma.$AgencyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgencyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberCountArgs} args - Arguments to filter AgencyMembers to count.
     * @example
     * // Count the number of AgencyMembers
     * const count = await prisma.agencyMember.count({
     *   where: {
     *     // ... the filter for the AgencyMembers we want to count
     *   }
     * })
    **/
    count<T extends AgencyMemberCountArgs>(
      args?: Subset<T, AgencyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgencyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgencyMemberAggregateArgs>(args: Subset<T, AgencyMemberAggregateArgs>): Prisma.PrismaPromise<GetAgencyMemberAggregateType<T>>

    /**
     * Group by AgencyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgencyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyMemberGroupByArgs['orderBy'] }
        : { orderBy?: AgencyMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgencyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgencyMember model
   */
  readonly fields: AgencyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgencyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencyDefaultArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedProperties<T extends AgencyMember$assignedPropertiesArgs<ExtArgs> = {}>(args?: Subset<T, AgencyMember$assignedPropertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgencyMember model
   */
  interface AgencyMemberFieldRefs {
    readonly id: FieldRef<"AgencyMember", 'String'>
    readonly agencyId: FieldRef<"AgencyMember", 'String'>
    readonly userId: FieldRef<"AgencyMember", 'String'>
    readonly role: FieldRef<"AgencyMember", 'AgencyMemberRole'>
    readonly isActive: FieldRef<"AgencyMember", 'Boolean'>
    readonly createdAt: FieldRef<"AgencyMember", 'DateTime'>
    readonly updatedAt: FieldRef<"AgencyMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgencyMember findUnique
   */
  export type AgencyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember findUniqueOrThrow
   */
  export type AgencyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember findFirst
   */
  export type AgencyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyMembers.
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyMembers.
     */
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * AgencyMember findFirstOrThrow
   */
  export type AgencyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMember to fetch.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgencyMembers.
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyMembers.
     */
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * AgencyMember findMany
   */
  export type AgencyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter, which AgencyMembers to fetch.
     */
    where?: AgencyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgencyMembers to fetch.
     */
    orderBy?: AgencyMemberOrderByWithRelationInput | AgencyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgencyMembers.
     */
    cursor?: AgencyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgencyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgencyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgencyMembers.
     */
    distinct?: AgencyMemberScalarFieldEnum | AgencyMemberScalarFieldEnum[]
  }

  /**
   * AgencyMember create
   */
  export type AgencyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a AgencyMember.
     */
    data: XOR<AgencyMemberCreateInput, AgencyMemberUncheckedCreateInput>
  }

  /**
   * AgencyMember createMany
   */
  export type AgencyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgencyMembers.
     */
    data: AgencyMemberCreateManyInput | AgencyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgencyMember createManyAndReturn
   */
  export type AgencyMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * The data used to create many AgencyMembers.
     */
    data: AgencyMemberCreateManyInput | AgencyMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyMember update
   */
  export type AgencyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a AgencyMember.
     */
    data: XOR<AgencyMemberUpdateInput, AgencyMemberUncheckedUpdateInput>
    /**
     * Choose, which AgencyMember to update.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember updateMany
   */
  export type AgencyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgencyMembers.
     */
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyInput>
    /**
     * Filter which AgencyMembers to update
     */
    where?: AgencyMemberWhereInput
    /**
     * Limit how many AgencyMembers to update.
     */
    limit?: number
  }

  /**
   * AgencyMember updateManyAndReturn
   */
  export type AgencyMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * The data used to update AgencyMembers.
     */
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyInput>
    /**
     * Filter which AgencyMembers to update
     */
    where?: AgencyMemberWhereInput
    /**
     * Limit how many AgencyMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgencyMember upsert
   */
  export type AgencyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the AgencyMember to update in case it exists.
     */
    where: AgencyMemberWhereUniqueInput
    /**
     * In case the AgencyMember found by the `where` argument doesn't exist, create a new AgencyMember with this data.
     */
    create: XOR<AgencyMemberCreateInput, AgencyMemberUncheckedCreateInput>
    /**
     * In case the AgencyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyMemberUpdateInput, AgencyMemberUncheckedUpdateInput>
  }

  /**
   * AgencyMember delete
   */
  export type AgencyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
    /**
     * Filter which AgencyMember to delete.
     */
    where: AgencyMemberWhereUniqueInput
  }

  /**
   * AgencyMember deleteMany
   */
  export type AgencyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgencyMembers to delete
     */
    where?: AgencyMemberWhereInput
    /**
     * Limit how many AgencyMembers to delete.
     */
    limit?: number
  }

  /**
   * AgencyMember.assignedProperties
   */
  export type AgencyMember$assignedPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * AgencyMember without action
   */
  export type AgencyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencyMember
     */
    select?: AgencyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgencyMember
     */
    omit?: AgencyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyMemberInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly usedAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    passwordHash: 'passwordHash',
    phone: 'phone',
    googleId: 'googleId',
    role: 'role',
    isActive: 'isActive',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserMediaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mediaType: 'mediaType',
    visibility: 'visibility',
    url: 'url',
    publicId: 'publicId',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserMediaScalarFieldEnum = (typeof UserMediaScalarFieldEnum)[keyof typeof UserMediaScalarFieldEnum]


  export const PersonProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    phone: 'phone',
    addressLine1: 'addressLine1',
    suburb: 'suburb',
    state: 'state',
    postcode: 'postcode',
    employmentStatus: 'employmentStatus',
    monthlyIncome: 'monthlyIncome',
    householdSize: 'householdSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonProfileScalarFieldEnum = (typeof PersonProfileScalarFieldEnum)[keyof typeof PersonProfileScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    listingType: 'listingType',
    propertyType: 'propertyType',
    price: 'price',
    addressLine1: 'addressLine1',
    suburb: 'suburb',
    state: 'state',
    postcode: 'postcode',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    parkingSpaces: 'parkingSpaces',
    isPublished: 'isPublished',
    createdById: 'createdById',
    agencyId: 'agencyId',
    assignedAgentMemberId: 'assignedAgentMemberId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    applicantId: 'applicantId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const PropertyMediaScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    mediaType: 'mediaType',
    visibility: 'visibility',
    url: 'url',
    publicId: 'publicId',
    isPrimary: 'isPrimary',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyMediaScalarFieldEnum = (typeof PropertyMediaScalarFieldEnum)[keyof typeof PropertyMediaScalarFieldEnum]


  export const AgencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    addressLine1: 'addressLine1',
    suburb: 'suburb',
    state: 'state',
    postcode: 'postcode',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const AgencyMemberScalarFieldEnum: {
    id: 'id',
    agencyId: 'agencyId',
    userId: 'userId',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgencyMemberScalarFieldEnum = (typeof AgencyMemberScalarFieldEnum)[keyof typeof AgencyMemberScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserMediaType'
   */
  export type EnumUserMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserMediaType'>
    


  /**
   * Reference to a field of type 'UserMediaType[]'
   */
  export type ListEnumUserMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserMediaType[]'>
    


  /**
   * Reference to a field of type 'MediaVisibility'
   */
  export type EnumMediaVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaVisibility'>
    


  /**
   * Reference to a field of type 'MediaVisibility[]'
   */
  export type ListEnumMediaVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaVisibility[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ListingType'
   */
  export type EnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType'>
    


  /**
   * Reference to a field of type 'ListingType[]'
   */
  export type ListEnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'PropertyMediaType'
   */
  export type EnumPropertyMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyMediaType'>
    


  /**
   * Reference to a field of type 'PropertyMediaType[]'
   */
  export type ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyMediaType[]'>
    


  /**
   * Reference to a field of type 'AgencyStatus'
   */
  export type EnumAgencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgencyStatus'>
    


  /**
   * Reference to a field of type 'AgencyStatus[]'
   */
  export type ListEnumAgencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgencyStatus[]'>
    


  /**
   * Reference to a field of type 'AgencyMemberRole'
   */
  export type EnumAgencyMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgencyMemberRole'>
    


  /**
   * Reference to a field of type 'AgencyMemberRole[]'
   */
  export type ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgencyMemberRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
    profile?: XOR<PersonProfileNullableScalarRelationFilter, PersonProfileWhereInput> | null
    applications?: ApplicationListRelationFilter
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    media?: UserMediaListRelationFilter
    agencyMemberships?: AgencyMemberListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    profile?: PersonProfileOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    emailVerificationTokens?: EmailVerificationTokenOrderByRelationAggregateInput
    media?: UserMediaOrderByRelationAggregateInput
    agencyMemberships?: AgencyMemberOrderByRelationAggregateInput
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
    profile?: XOR<PersonProfileNullableScalarRelationFilter, PersonProfileWhereInput> | null
    applications?: ApplicationListRelationFilter
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    media?: UserMediaListRelationFilter
    agencyMemberships?: AgencyMemberListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  }, "id" | "email" | "phone" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserMediaWhereInput = {
    AND?: UserMediaWhereInput | UserMediaWhereInput[]
    OR?: UserMediaWhereInput[]
    NOT?: UserMediaWhereInput | UserMediaWhereInput[]
    id?: StringFilter<"UserMedia"> | string
    userId?: StringFilter<"UserMedia"> | string
    mediaType?: EnumUserMediaTypeFilter<"UserMedia"> | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFilter<"UserMedia"> | $Enums.MediaVisibility
    url?: StringFilter<"UserMedia"> | string
    publicId?: StringFilter<"UserMedia"> | string
    isPrimary?: BoolFilter<"UserMedia"> | boolean
    createdAt?: DateTimeFilter<"UserMedia"> | Date | string
    updatedAt?: DateTimeFilter<"UserMedia"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserMediaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserMediaWhereInput | UserMediaWhereInput[]
    OR?: UserMediaWhereInput[]
    NOT?: UserMediaWhereInput | UserMediaWhereInput[]
    userId?: StringFilter<"UserMedia"> | string
    mediaType?: EnumUserMediaTypeFilter<"UserMedia"> | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFilter<"UserMedia"> | $Enums.MediaVisibility
    url?: StringFilter<"UserMedia"> | string
    publicId?: StringFilter<"UserMedia"> | string
    isPrimary?: BoolFilter<"UserMedia"> | boolean
    createdAt?: DateTimeFilter<"UserMedia"> | Date | string
    updatedAt?: DateTimeFilter<"UserMedia"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserMediaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserMediaCountOrderByAggregateInput
    _max?: UserMediaMaxOrderByAggregateInput
    _min?: UserMediaMinOrderByAggregateInput
  }

  export type UserMediaScalarWhereWithAggregatesInput = {
    AND?: UserMediaScalarWhereWithAggregatesInput | UserMediaScalarWhereWithAggregatesInput[]
    OR?: UserMediaScalarWhereWithAggregatesInput[]
    NOT?: UserMediaScalarWhereWithAggregatesInput | UserMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMedia"> | string
    userId?: StringWithAggregatesFilter<"UserMedia"> | string
    mediaType?: EnumUserMediaTypeWithAggregatesFilter<"UserMedia"> | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityWithAggregatesFilter<"UserMedia"> | $Enums.MediaVisibility
    url?: StringWithAggregatesFilter<"UserMedia"> | string
    publicId?: StringWithAggregatesFilter<"UserMedia"> | string
    isPrimary?: BoolWithAggregatesFilter<"UserMedia"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserMedia"> | Date | string
  }

  export type PersonProfileWhereInput = {
    AND?: PersonProfileWhereInput | PersonProfileWhereInput[]
    OR?: PersonProfileWhereInput[]
    NOT?: PersonProfileWhereInput | PersonProfileWhereInput[]
    id?: StringFilter<"PersonProfile"> | string
    userId?: StringFilter<"PersonProfile"> | string
    fullName?: StringFilter<"PersonProfile"> | string
    phone?: StringFilter<"PersonProfile"> | string
    addressLine1?: StringFilter<"PersonProfile"> | string
    suburb?: StringFilter<"PersonProfile"> | string
    state?: StringFilter<"PersonProfile"> | string
    postcode?: StringFilter<"PersonProfile"> | string
    employmentStatus?: StringFilter<"PersonProfile"> | string
    monthlyIncome?: DecimalFilter<"PersonProfile"> | Decimal | DecimalJsLike | number | string
    householdSize?: IntFilter<"PersonProfile"> | number
    createdAt?: DateTimeFilter<"PersonProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PersonProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PersonProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    employmentStatus?: SortOrder
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PersonProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PersonProfileWhereInput | PersonProfileWhereInput[]
    OR?: PersonProfileWhereInput[]
    NOT?: PersonProfileWhereInput | PersonProfileWhereInput[]
    fullName?: StringFilter<"PersonProfile"> | string
    phone?: StringFilter<"PersonProfile"> | string
    addressLine1?: StringFilter<"PersonProfile"> | string
    suburb?: StringFilter<"PersonProfile"> | string
    state?: StringFilter<"PersonProfile"> | string
    postcode?: StringFilter<"PersonProfile"> | string
    employmentStatus?: StringFilter<"PersonProfile"> | string
    monthlyIncome?: DecimalFilter<"PersonProfile"> | Decimal | DecimalJsLike | number | string
    householdSize?: IntFilter<"PersonProfile"> | number
    createdAt?: DateTimeFilter<"PersonProfile"> | Date | string
    updatedAt?: DateTimeFilter<"PersonProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PersonProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    employmentStatus?: SortOrder
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonProfileCountOrderByAggregateInput
    _avg?: PersonProfileAvgOrderByAggregateInput
    _max?: PersonProfileMaxOrderByAggregateInput
    _min?: PersonProfileMinOrderByAggregateInput
    _sum?: PersonProfileSumOrderByAggregateInput
  }

  export type PersonProfileScalarWhereWithAggregatesInput = {
    AND?: PersonProfileScalarWhereWithAggregatesInput | PersonProfileScalarWhereWithAggregatesInput[]
    OR?: PersonProfileScalarWhereWithAggregatesInput[]
    NOT?: PersonProfileScalarWhereWithAggregatesInput | PersonProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonProfile"> | string
    userId?: StringWithAggregatesFilter<"PersonProfile"> | string
    fullName?: StringWithAggregatesFilter<"PersonProfile"> | string
    phone?: StringWithAggregatesFilter<"PersonProfile"> | string
    addressLine1?: StringWithAggregatesFilter<"PersonProfile"> | string
    suburb?: StringWithAggregatesFilter<"PersonProfile"> | string
    state?: StringWithAggregatesFilter<"PersonProfile"> | string
    postcode?: StringWithAggregatesFilter<"PersonProfile"> | string
    employmentStatus?: StringWithAggregatesFilter<"PersonProfile"> | string
    monthlyIncome?: DecimalWithAggregatesFilter<"PersonProfile"> | Decimal | DecimalJsLike | number | string
    householdSize?: IntWithAggregatesFilter<"PersonProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PersonProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PersonProfile"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    listingType?: EnumListingTypeFilter<"Property"> | $Enums.ListingType
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFilter<"Property"> | string
    suburb?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    postcode?: StringFilter<"Property"> | string
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    parkingSpaces?: IntNullableFilter<"Property"> | number | null
    isPublished?: BoolFilter<"Property"> | boolean
    createdById?: StringFilter<"Property"> | string
    agencyId?: StringNullableFilter<"Property"> | string | null
    assignedAgentMemberId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    agency?: XOR<AgencyNullableScalarRelationFilter, AgencyWhereInput> | null
    assignedAgentMember?: XOR<AgencyMemberNullableScalarRelationFilter, AgencyMemberWhereInput> | null
    application?: ApplicationListRelationFilter
    media?: PropertyMediaListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    listingType?: SortOrder
    propertyType?: SortOrder
    price?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    parkingSpaces?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdById?: SortOrder
    agencyId?: SortOrderInput | SortOrder
    assignedAgentMemberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    agency?: AgencyOrderByWithRelationInput
    assignedAgentMember?: AgencyMemberOrderByWithRelationInput
    application?: ApplicationOrderByRelationAggregateInput
    media?: PropertyMediaOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    listingType?: EnumListingTypeFilter<"Property"> | $Enums.ListingType
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFilter<"Property"> | string
    suburb?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    postcode?: StringFilter<"Property"> | string
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    parkingSpaces?: IntNullableFilter<"Property"> | number | null
    isPublished?: BoolFilter<"Property"> | boolean
    createdById?: StringFilter<"Property"> | string
    agencyId?: StringNullableFilter<"Property"> | string | null
    assignedAgentMemberId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    agency?: XOR<AgencyNullableScalarRelationFilter, AgencyWhereInput> | null
    assignedAgentMember?: XOR<AgencyMemberNullableScalarRelationFilter, AgencyMemberWhereInput> | null
    application?: ApplicationListRelationFilter
    media?: PropertyMediaListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    listingType?: SortOrder
    propertyType?: SortOrder
    price?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    bedrooms?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    parkingSpaces?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdById?: SortOrder
    agencyId?: SortOrderInput | SortOrder
    assignedAgentMemberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    listingType?: EnumListingTypeWithAggregatesFilter<"Property"> | $Enums.ListingType
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    price?: DecimalWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string
    addressLine1?: StringWithAggregatesFilter<"Property"> | string
    suburb?: StringWithAggregatesFilter<"Property"> | string
    state?: StringWithAggregatesFilter<"Property"> | string
    postcode?: StringWithAggregatesFilter<"Property"> | string
    bedrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    bathrooms?: IntNullableWithAggregatesFilter<"Property"> | number | null
    parkingSpaces?: IntNullableWithAggregatesFilter<"Property"> | number | null
    isPublished?: BoolWithAggregatesFilter<"Property"> | boolean
    createdById?: StringWithAggregatesFilter<"Property"> | string
    agencyId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    assignedAgentMemberId?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    propertyId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    message?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId_applicantId?: ApplicationPropertyIdApplicantIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    propertyId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    message?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "propertyId_applicantId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    propertyId?: StringWithAggregatesFilter<"Application"> | string
    applicantId?: StringWithAggregatesFilter<"Application"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    message?: StringNullableWithAggregatesFilter<"Application"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    token?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    userId?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    userId?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    token?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
  }

  export type PropertyMediaWhereInput = {
    AND?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    OR?: PropertyMediaWhereInput[]
    NOT?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    id?: StringFilter<"PropertyMedia"> | string
    propertyId?: StringFilter<"PropertyMedia"> | string
    mediaType?: EnumPropertyMediaTypeFilter<"PropertyMedia"> | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFilter<"PropertyMedia"> | $Enums.MediaVisibility
    url?: StringFilter<"PropertyMedia"> | string
    publicId?: StringFilter<"PropertyMedia"> | string
    isPrimary?: BoolFilter<"PropertyMedia"> | boolean
    sortOrder?: IntFilter<"PropertyMedia"> | number
    createdAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyMediaOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    OR?: PropertyMediaWhereInput[]
    NOT?: PropertyMediaWhereInput | PropertyMediaWhereInput[]
    propertyId?: StringFilter<"PropertyMedia"> | string
    mediaType?: EnumPropertyMediaTypeFilter<"PropertyMedia"> | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFilter<"PropertyMedia"> | $Enums.MediaVisibility
    url?: StringFilter<"PropertyMedia"> | string
    publicId?: StringFilter<"PropertyMedia"> | string
    isPrimary?: BoolFilter<"PropertyMedia"> | boolean
    sortOrder?: IntFilter<"PropertyMedia"> | number
    createdAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyMediaOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyMediaCountOrderByAggregateInput
    _avg?: PropertyMediaAvgOrderByAggregateInput
    _max?: PropertyMediaMaxOrderByAggregateInput
    _min?: PropertyMediaMinOrderByAggregateInput
    _sum?: PropertyMediaSumOrderByAggregateInput
  }

  export type PropertyMediaScalarWhereWithAggregatesInput = {
    AND?: PropertyMediaScalarWhereWithAggregatesInput | PropertyMediaScalarWhereWithAggregatesInput[]
    OR?: PropertyMediaScalarWhereWithAggregatesInput[]
    NOT?: PropertyMediaScalarWhereWithAggregatesInput | PropertyMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PropertyMedia"> | string
    propertyId?: StringWithAggregatesFilter<"PropertyMedia"> | string
    mediaType?: EnumPropertyMediaTypeWithAggregatesFilter<"PropertyMedia"> | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityWithAggregatesFilter<"PropertyMedia"> | $Enums.MediaVisibility
    url?: StringWithAggregatesFilter<"PropertyMedia"> | string
    publicId?: StringWithAggregatesFilter<"PropertyMedia"> | string
    isPrimary?: BoolWithAggregatesFilter<"PropertyMedia"> | boolean
    sortOrder?: IntWithAggregatesFilter<"PropertyMedia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyMedia"> | Date | string
  }

  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    name?: StringFilter<"Agency"> | string
    slug?: StringFilter<"Agency"> | string
    email?: StringFilter<"Agency"> | string
    phone?: StringNullableFilter<"Agency"> | string | null
    addressLine1?: StringNullableFilter<"Agency"> | string | null
    suburb?: StringNullableFilter<"Agency"> | string | null
    state?: StringNullableFilter<"Agency"> | string | null
    postcode?: StringNullableFilter<"Agency"> | string | null
    status?: EnumAgencyStatusFilter<"Agency"> | $Enums.AgencyStatus
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    updatedAt?: DateTimeFilter<"Agency"> | Date | string
    members?: AgencyMemberListRelationFilter
    property?: PropertyListRelationFilter
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    suburb?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: AgencyMemberOrderByRelationAggregateInput
    property?: PropertyOrderByRelationAggregateInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    email?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    name?: StringFilter<"Agency"> | string
    phone?: StringNullableFilter<"Agency"> | string | null
    addressLine1?: StringNullableFilter<"Agency"> | string | null
    suburb?: StringNullableFilter<"Agency"> | string | null
    state?: StringNullableFilter<"Agency"> | string | null
    postcode?: StringNullableFilter<"Agency"> | string | null
    status?: EnumAgencyStatusFilter<"Agency"> | $Enums.AgencyStatus
    createdAt?: DateTimeFilter<"Agency"> | Date | string
    updatedAt?: DateTimeFilter<"Agency"> | Date | string
    members?: AgencyMemberListRelationFilter
    property?: PropertyListRelationFilter
  }, "id" | "slug" | "email">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    suburb?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    name?: StringWithAggregatesFilter<"Agency"> | string
    slug?: StringWithAggregatesFilter<"Agency"> | string
    email?: StringWithAggregatesFilter<"Agency"> | string
    phone?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    addressLine1?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    suburb?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    state?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    postcode?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    status?: EnumAgencyStatusWithAggregatesFilter<"Agency"> | $Enums.AgencyStatus
    createdAt?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
  }

  export type AgencyMemberWhereInput = {
    AND?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    OR?: AgencyMemberWhereInput[]
    NOT?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    id?: StringFilter<"AgencyMember"> | string
    agencyId?: StringFilter<"AgencyMember"> | string
    userId?: StringFilter<"AgencyMember"> | string
    role?: EnumAgencyMemberRoleFilter<"AgencyMember"> | $Enums.AgencyMemberRole
    isActive?: BoolFilter<"AgencyMember"> | boolean
    createdAt?: DateTimeFilter<"AgencyMember"> | Date | string
    updatedAt?: DateTimeFilter<"AgencyMember"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedProperties?: PropertyListRelationFilter
  }

  export type AgencyMemberOrderByWithRelationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agency?: AgencyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    assignedProperties?: PropertyOrderByRelationAggregateInput
  }

  export type AgencyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agencyId_userId?: AgencyMemberAgencyIdUserIdCompoundUniqueInput
    AND?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    OR?: AgencyMemberWhereInput[]
    NOT?: AgencyMemberWhereInput | AgencyMemberWhereInput[]
    agencyId?: StringFilter<"AgencyMember"> | string
    userId?: StringFilter<"AgencyMember"> | string
    role?: EnumAgencyMemberRoleFilter<"AgencyMember"> | $Enums.AgencyMemberRole
    isActive?: BoolFilter<"AgencyMember"> | boolean
    createdAt?: DateTimeFilter<"AgencyMember"> | Date | string
    updatedAt?: DateTimeFilter<"AgencyMember"> | Date | string
    agency?: XOR<AgencyScalarRelationFilter, AgencyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedProperties?: PropertyListRelationFilter
  }, "id" | "agencyId_userId">

  export type AgencyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    agencyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgencyMemberCountOrderByAggregateInput
    _max?: AgencyMemberMaxOrderByAggregateInput
    _min?: AgencyMemberMinOrderByAggregateInput
  }

  export type AgencyMemberScalarWhereWithAggregatesInput = {
    AND?: AgencyMemberScalarWhereWithAggregatesInput | AgencyMemberScalarWhereWithAggregatesInput[]
    OR?: AgencyMemberScalarWhereWithAggregatesInput[]
    NOT?: AgencyMemberScalarWhereWithAggregatesInput | AgencyMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgencyMember"> | string
    agencyId?: StringWithAggregatesFilter<"AgencyMember"> | string
    userId?: StringWithAggregatesFilter<"AgencyMember"> | string
    role?: EnumAgencyMemberRoleWithAggregatesFilter<"AgencyMember"> | $Enums.AgencyMemberRole
    isActive?: BoolWithAggregatesFilter<"AgencyMember"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AgencyMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgencyMember"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaCreateInput = {
    id?: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMediaInput
  }

  export type UserMediaUncheckedCreateInput = {
    id?: string
    userId: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMediaNestedInput
  }

  export type UserMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaCreateManyInput = {
    id?: string
    userId: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonProfileCreateInput = {
    id?: string
    fullName: string
    phone: string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    employmentStatus: string
    monthlyIncome: Decimal | DecimalJsLike | number | string
    householdSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type PersonProfileUncheckedCreateInput = {
    id?: string
    userId: string
    fullName: string
    phone: string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    employmentStatus: string
    monthlyIncome: Decimal | DecimalJsLike | number | string
    householdSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    householdSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type PersonProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    householdSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonProfileCreateManyInput = {
    id?: string
    userId: string
    fullName: string
    phone: string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    employmentStatus: string
    monthlyIncome: Decimal | DecimalJsLike | number | string
    householdSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    householdSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    householdSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPropertiesInput
    agency?: AgencyCreateNestedOneWithoutPropertyInput
    assignedAgentMember?: AgencyMemberCreateNestedOneWithoutAssignedPropertiesInput
    application?: ApplicationCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    agencyId?: string | null
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application?: ApplicationUncheckedCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    agency?: AgencyUpdateOneWithoutPropertyNestedInput
    assignedAgentMember?: AgencyMemberUpdateOneWithoutAssignedPropertiesNestedInput
    application?: ApplicationUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUncheckedUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    agencyId?: string | null
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutApplicationInput
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    propertyId: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutApplicationNestedInput
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: string
    propertyId: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailVerificationTokensInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaCreateInput = {
    id?: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutMediaInput
  }

  export type PropertyMediaUncheckedCreateInput = {
    id?: string
    propertyId: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutMediaNestedInput
  }

  export type PropertyMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaCreateManyInput = {
    id?: string
    propertyId: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: AgencyMemberCreateNestedManyWithoutAgencyInput
    property?: PropertyCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: AgencyMemberUncheckedCreateNestedManyWithoutAgencyInput
    property?: PropertyUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: AgencyMemberUpdateManyWithoutAgencyNestedInput
    property?: PropertyUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: AgencyMemberUncheckedUpdateManyWithoutAgencyNestedInput
    property?: PropertyUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyCreateManyInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberCreateInput = {
    id?: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutAgencyMembershipsInput
    assignedProperties?: PropertyCreateNestedManyWithoutAssignedAgentMemberInput
  }

  export type AgencyMemberUncheckedCreateInput = {
    id?: string
    agencyId: string
    userId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedProperties?: PropertyUncheckedCreateNestedManyWithoutAssignedAgentMemberInput
  }

  export type AgencyMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutAgencyMembershipsNestedInput
    assignedProperties?: PropertyUpdateManyWithoutAssignedAgentMemberNestedInput
  }

  export type AgencyMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedProperties?: PropertyUncheckedUpdateManyWithoutAssignedAgentMemberNestedInput
  }

  export type AgencyMemberCreateManyInput = {
    id?: string
    agencyId: string
    userId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgencyMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PersonProfileNullableScalarRelationFilter = {
    is?: PersonProfileWhereInput | null
    isNot?: PersonProfileWhereInput | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type EmailVerificationTokenListRelationFilter = {
    every?: EmailVerificationTokenWhereInput
    some?: EmailVerificationTokenWhereInput
    none?: EmailVerificationTokenWhereInput
  }

  export type UserMediaListRelationFilter = {
    every?: UserMediaWhereInput
    some?: UserMediaWhereInput
    none?: UserMediaWhereInput
  }

  export type AgencyMemberListRelationFilter = {
    every?: AgencyMemberWhereInput
    some?: AgencyMemberWhereInput
    none?: AgencyMemberWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMediaType | EnumUserMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMediaTypeFilter<$PrismaModel> | $Enums.UserMediaType
  }

  export type EnumMediaVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaVisibility | EnumMediaVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaVisibilityFilter<$PrismaModel> | $Enums.MediaVisibility
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserMediaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMediaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMediaType | EnumUserMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumUserMediaTypeFilter<$PrismaModel>
  }

  export type EnumMediaVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaVisibility | EnumMediaVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.MediaVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaVisibilityFilter<$PrismaModel>
    _max?: NestedEnumMediaVisibilityFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PersonProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    employmentStatus?: SortOrder
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonProfileAvgOrderByAggregateInput = {
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
  }

  export type PersonProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    employmentStatus?: SortOrder
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    employmentStatus?: SortOrder
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonProfileSumOrderByAggregateInput = {
    monthlyIncome?: SortOrder
    householdSize?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AgencyNullableScalarRelationFilter = {
    is?: AgencyWhereInput | null
    isNot?: AgencyWhereInput | null
  }

  export type AgencyMemberNullableScalarRelationFilter = {
    is?: AgencyMemberWhereInput | null
    isNot?: AgencyMemberWhereInput | null
  }

  export type PropertyMediaListRelationFilter = {
    every?: PropertyMediaWhereInput
    some?: PropertyMediaWhereInput
    none?: PropertyMediaWhereInput
  }

  export type PropertyMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    listingType?: SortOrder
    propertyType?: SortOrder
    price?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    parkingSpaces?: SortOrder
    isPublished?: SortOrder
    createdById?: SortOrder
    agencyId?: SortOrder
    assignedAgentMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    parkingSpaces?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    listingType?: SortOrder
    propertyType?: SortOrder
    price?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    parkingSpaces?: SortOrder
    isPublished?: SortOrder
    createdById?: SortOrder
    agencyId?: SortOrder
    assignedAgentMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    listingType?: SortOrder
    propertyType?: SortOrder
    price?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    parkingSpaces?: SortOrder
    isPublished?: SortOrder
    createdById?: SortOrder
    agencyId?: SortOrder
    assignedAgentMemberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    parkingSpaces?: SortOrder
  }

  export type EnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type ApplicationPropertyIdApplicantIdCompoundUniqueInput = {
    propertyId: string
    applicantId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    applicantId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPropertyMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyMediaType | EnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyMediaTypeFilter<$PrismaModel> | $Enums.PropertyMediaType
  }

  export type PropertyMediaCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMediaAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PropertyMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMediaMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    isPrimary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMediaSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumPropertyMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyMediaType | EnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyMediaTypeFilter<$PrismaModel>
  }

  export type EnumAgencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyStatus | EnumAgencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyStatusFilter<$PrismaModel> | $Enums.AgencyStatus
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressLine1?: SortOrder
    suburb?: SortOrder
    state?: SortOrder
    postcode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAgencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyStatus | EnumAgencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgencyStatusFilter<$PrismaModel>
    _max?: NestedEnumAgencyStatusFilter<$PrismaModel>
  }

  export type EnumAgencyMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyMemberRole | EnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyMemberRoleFilter<$PrismaModel> | $Enums.AgencyMemberRole
  }

  export type AgencyScalarRelationFilter = {
    is?: AgencyWhereInput
    isNot?: AgencyWhereInput
  }

  export type AgencyMemberAgencyIdUserIdCompoundUniqueInput = {
    agencyId: string
    userId: string
  }

  export type AgencyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgencyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgencyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    agencyId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAgencyMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyMemberRole | EnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.AgencyMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgencyMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumAgencyMemberRoleFilter<$PrismaModel>
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PersonProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonProfileCreateWithoutUserInput, PersonProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonProfileCreateOrConnectWithoutUserInput
    connect?: PersonProfileWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EmailVerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type UserMediaCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
  }

  export type AgencyMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<AgencyMemberCreateWithoutUserInput, AgencyMemberUncheckedCreateWithoutUserInput> | AgencyMemberCreateWithoutUserInput[] | AgencyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutUserInput | AgencyMemberCreateOrConnectWithoutUserInput[]
    createMany?: AgencyMemberCreateManyUserInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PersonProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonProfileCreateWithoutUserInput, PersonProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonProfileCreateOrConnectWithoutUserInput
    connect?: PersonProfileWhereUniqueInput
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type UserMediaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
  }

  export type AgencyMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AgencyMemberCreateWithoutUserInput, AgencyMemberUncheckedCreateWithoutUserInput> | AgencyMemberCreateWithoutUserInput[] | AgencyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutUserInput | AgencyMemberCreateOrConnectWithoutUserInput[]
    createMany?: AgencyMemberCreateManyUserInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCreatedByInput | PropertyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCreatedByInput | PropertyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCreatedByInput | PropertyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PersonProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonProfileCreateWithoutUserInput, PersonProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonProfileCreateOrConnectWithoutUserInput
    upsert?: PersonProfileUpsertWithoutUserInput
    disconnect?: PersonProfileWhereInput | boolean
    delete?: PersonProfileWhereInput | boolean
    connect?: PersonProfileWhereUniqueInput
    update?: XOR<XOR<PersonProfileUpdateToOneWithWhereWithoutUserInput, PersonProfileUpdateWithoutUserInput>, PersonProfileUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type EmailVerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type UserMediaUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    upsert?: UserMediaUpsertWithWhereUniqueWithoutUserInput | UserMediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    set?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    disconnect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    delete?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    update?: UserMediaUpdateWithWhereUniqueWithoutUserInput | UserMediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMediaUpdateManyWithWhereWithoutUserInput | UserMediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
  }

  export type AgencyMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutUserInput, AgencyMemberUncheckedCreateWithoutUserInput> | AgencyMemberCreateWithoutUserInput[] | AgencyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutUserInput | AgencyMemberCreateOrConnectWithoutUserInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutUserInput | AgencyMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AgencyMemberCreateManyUserInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutUserInput | AgencyMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutUserInput | AgencyMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCreatedByInput | PropertyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCreatedByInput | PropertyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCreatedByInput | PropertyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PersonProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonProfileCreateWithoutUserInput, PersonProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonProfileCreateOrConnectWithoutUserInput
    upsert?: PersonProfileUpsertWithoutUserInput
    disconnect?: PersonProfileWhereInput | boolean
    delete?: PersonProfileWhereInput | boolean
    connect?: PersonProfileWhereUniqueInput
    update?: XOR<XOR<PersonProfileUpdateToOneWithWhereWithoutUserInput, PersonProfileUpdateWithoutUserInput>, PersonProfileUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type UserMediaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput> | UserMediaCreateWithoutUserInput[] | UserMediaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMediaCreateOrConnectWithoutUserInput | UserMediaCreateOrConnectWithoutUserInput[]
    upsert?: UserMediaUpsertWithWhereUniqueWithoutUserInput | UserMediaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMediaCreateManyUserInputEnvelope
    set?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    disconnect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    delete?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    connect?: UserMediaWhereUniqueInput | UserMediaWhereUniqueInput[]
    update?: UserMediaUpdateWithWhereUniqueWithoutUserInput | UserMediaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMediaUpdateManyWithWhereWithoutUserInput | UserMediaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
  }

  export type AgencyMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutUserInput, AgencyMemberUncheckedCreateWithoutUserInput> | AgencyMemberCreateWithoutUserInput[] | AgencyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutUserInput | AgencyMemberCreateOrConnectWithoutUserInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutUserInput | AgencyMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AgencyMemberCreateManyUserInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutUserInput | AgencyMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutUserInput | AgencyMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMediaInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUserMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserMediaType
  }

  export type EnumMediaVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.MediaVisibility
  }

  export type UserUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    upsert?: UserUpsertWithoutMediaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediaInput, UserUpdateWithoutMediaInput>, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type AgencyCreateNestedOneWithoutPropertyInput = {
    create?: XOR<AgencyCreateWithoutPropertyInput, AgencyUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutPropertyInput
    connect?: AgencyWhereUniqueInput
  }

  export type AgencyMemberCreateNestedOneWithoutAssignedPropertiesInput = {
    create?: XOR<AgencyMemberCreateWithoutAssignedPropertiesInput, AgencyMemberUncheckedCreateWithoutAssignedPropertiesInput>
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAssignedPropertiesInput
    connect?: AgencyMemberWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ApplicationCreateWithoutPropertyInput, ApplicationUncheckedCreateWithoutPropertyInput> | ApplicationCreateWithoutPropertyInput[] | ApplicationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPropertyInput | ApplicationCreateOrConnectWithoutPropertyInput[]
    createMany?: ApplicationCreateManyPropertyInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PropertyMediaCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ApplicationCreateWithoutPropertyInput, ApplicationUncheckedCreateWithoutPropertyInput> | ApplicationCreateWithoutPropertyInput[] | ApplicationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPropertyInput | ApplicationCreateOrConnectWithoutPropertyInput[]
    createMany?: ApplicationCreateManyPropertyInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
  }

  export type EnumListingTypeFieldUpdateOperationsInput = {
    set?: $Enums.ListingType
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type AgencyUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<AgencyCreateWithoutPropertyInput, AgencyUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutPropertyInput
    upsert?: AgencyUpsertWithoutPropertyInput
    disconnect?: AgencyWhereInput | boolean
    delete?: AgencyWhereInput | boolean
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutPropertyInput, AgencyUpdateWithoutPropertyInput>, AgencyUncheckedUpdateWithoutPropertyInput>
  }

  export type AgencyMemberUpdateOneWithoutAssignedPropertiesNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAssignedPropertiesInput, AgencyMemberUncheckedCreateWithoutAssignedPropertiesInput>
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAssignedPropertiesInput
    upsert?: AgencyMemberUpsertWithoutAssignedPropertiesInput
    disconnect?: AgencyMemberWhereInput | boolean
    delete?: AgencyMemberWhereInput | boolean
    connect?: AgencyMemberWhereUniqueInput
    update?: XOR<XOR<AgencyMemberUpdateToOneWithWhereWithoutAssignedPropertiesInput, AgencyMemberUpdateWithoutAssignedPropertiesInput>, AgencyMemberUncheckedUpdateWithoutAssignedPropertiesInput>
  }

  export type ApplicationUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ApplicationCreateWithoutPropertyInput, ApplicationUncheckedCreateWithoutPropertyInput> | ApplicationCreateWithoutPropertyInput[] | ApplicationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPropertyInput | ApplicationCreateOrConnectWithoutPropertyInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPropertyInput | ApplicationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ApplicationCreateManyPropertyInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPropertyInput | ApplicationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPropertyInput | ApplicationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PropertyMediaUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput | PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    set?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    disconnect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    delete?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    update?: PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput | PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyMediaUpdateManyWithWhereWithoutPropertyInput | PropertyMediaUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ApplicationCreateWithoutPropertyInput, ApplicationUncheckedCreateWithoutPropertyInput> | ApplicationCreateWithoutPropertyInput[] | ApplicationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPropertyInput | ApplicationCreateOrConnectWithoutPropertyInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPropertyInput | ApplicationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ApplicationCreateManyPropertyInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPropertyInput | ApplicationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPropertyInput | ApplicationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput> | PropertyMediaCreateWithoutPropertyInput[] | PropertyMediaUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyMediaCreateOrConnectWithoutPropertyInput | PropertyMediaCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput | PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyMediaCreateManyPropertyInputEnvelope
    set?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    disconnect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    delete?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    connect?: PropertyMediaWhereUniqueInput | PropertyMediaWhereUniqueInput[]
    update?: PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput | PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyMediaUpdateManyWithWhereWithoutPropertyInput | PropertyMediaUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutApplicationInput = {
    create?: XOR<PropertyCreateWithoutApplicationInput, PropertyUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutApplicationInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type PropertyUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<PropertyCreateWithoutApplicationInput, PropertyUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutApplicationInput
    upsert?: PropertyUpsertWithoutApplicationInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutApplicationInput, PropertyUpdateWithoutApplicationInput>, PropertyUncheckedUpdateWithoutApplicationInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserCreateNestedOneWithoutEmailVerificationTokensInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    upsert?: UserUpsertWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput, UserUpdateWithoutEmailVerificationTokensInput>, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type PropertyCreateNestedOneWithoutMediaInput = {
    create?: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMediaInput
    connect?: PropertyWhereUniqueInput
  }

  export type EnumPropertyMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyMediaType
  }

  export type PropertyUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutMediaInput
    upsert?: PropertyUpsertWithoutMediaInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutMediaInput, PropertyUpdateWithoutMediaInput>, PropertyUncheckedUpdateWithoutMediaInput>
  }

  export type AgencyMemberCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutAgencyInput = {
    create?: XOR<PropertyCreateWithoutAgencyInput, PropertyUncheckedCreateWithoutAgencyInput> | PropertyCreateWithoutAgencyInput[] | PropertyUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAgencyInput | PropertyCreateOrConnectWithoutAgencyInput[]
    createMany?: PropertyCreateManyAgencyInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type AgencyMemberUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<PropertyCreateWithoutAgencyInput, PropertyUncheckedCreateWithoutAgencyInput> | PropertyCreateWithoutAgencyInput[] | PropertyUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAgencyInput | PropertyCreateOrConnectWithoutAgencyInput[]
    createMany?: PropertyCreateManyAgencyInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type EnumAgencyStatusFieldUpdateOperationsInput = {
    set?: $Enums.AgencyStatus
  }

  export type AgencyMemberUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput | AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput | AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutAgencyInput | AgencyMemberUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<PropertyCreateWithoutAgencyInput, PropertyUncheckedCreateWithoutAgencyInput> | PropertyCreateWithoutAgencyInput[] | PropertyUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAgencyInput | PropertyCreateOrConnectWithoutAgencyInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAgencyInput | PropertyUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: PropertyCreateManyAgencyInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAgencyInput | PropertyUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAgencyInput | PropertyUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type AgencyMemberUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput> | AgencyMemberCreateWithoutAgencyInput[] | AgencyMemberUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: AgencyMemberCreateOrConnectWithoutAgencyInput | AgencyMemberCreateOrConnectWithoutAgencyInput[]
    upsert?: AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput | AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: AgencyMemberCreateManyAgencyInputEnvelope
    set?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    disconnect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    delete?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    connect?: AgencyMemberWhereUniqueInput | AgencyMemberWhereUniqueInput[]
    update?: AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput | AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: AgencyMemberUpdateManyWithWhereWithoutAgencyInput | AgencyMemberUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<PropertyCreateWithoutAgencyInput, PropertyUncheckedCreateWithoutAgencyInput> | PropertyCreateWithoutAgencyInput[] | PropertyUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAgencyInput | PropertyCreateOrConnectWithoutAgencyInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAgencyInput | PropertyUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: PropertyCreateManyAgencyInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAgencyInput | PropertyUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAgencyInput | PropertyUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type AgencyCreateNestedOneWithoutMembersInput = {
    create?: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutMembersInput
    connect?: AgencyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAgencyMembershipsInput = {
    create?: XOR<UserCreateWithoutAgencyMembershipsInput, UserUncheckedCreateWithoutAgencyMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgencyMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutAssignedAgentMemberInput = {
    create?: XOR<PropertyCreateWithoutAssignedAgentMemberInput, PropertyUncheckedCreateWithoutAssignedAgentMemberInput> | PropertyCreateWithoutAssignedAgentMemberInput[] | PropertyUncheckedCreateWithoutAssignedAgentMemberInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAssignedAgentMemberInput | PropertyCreateOrConnectWithoutAssignedAgentMemberInput[]
    createMany?: PropertyCreateManyAssignedAgentMemberInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutAssignedAgentMemberInput = {
    create?: XOR<PropertyCreateWithoutAssignedAgentMemberInput, PropertyUncheckedCreateWithoutAssignedAgentMemberInput> | PropertyCreateWithoutAssignedAgentMemberInput[] | PropertyUncheckedCreateWithoutAssignedAgentMemberInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAssignedAgentMemberInput | PropertyCreateOrConnectWithoutAssignedAgentMemberInput[]
    createMany?: PropertyCreateManyAssignedAgentMemberInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type EnumAgencyMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.AgencyMemberRole
  }

  export type AgencyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutMembersInput
    upsert?: AgencyUpsertWithoutMembersInput
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutMembersInput, AgencyUpdateWithoutMembersInput>, AgencyUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutAgencyMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutAgencyMembershipsInput, UserUncheckedCreateWithoutAgencyMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgencyMembershipsInput
    upsert?: UserUpsertWithoutAgencyMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgencyMembershipsInput, UserUpdateWithoutAgencyMembershipsInput>, UserUncheckedUpdateWithoutAgencyMembershipsInput>
  }

  export type PropertyUpdateManyWithoutAssignedAgentMemberNestedInput = {
    create?: XOR<PropertyCreateWithoutAssignedAgentMemberInput, PropertyUncheckedCreateWithoutAssignedAgentMemberInput> | PropertyCreateWithoutAssignedAgentMemberInput[] | PropertyUncheckedCreateWithoutAssignedAgentMemberInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAssignedAgentMemberInput | PropertyCreateOrConnectWithoutAssignedAgentMemberInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAssignedAgentMemberInput | PropertyUpsertWithWhereUniqueWithoutAssignedAgentMemberInput[]
    createMany?: PropertyCreateManyAssignedAgentMemberInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAssignedAgentMemberInput | PropertyUpdateWithWhereUniqueWithoutAssignedAgentMemberInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAssignedAgentMemberInput | PropertyUpdateManyWithWhereWithoutAssignedAgentMemberInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutAssignedAgentMemberNestedInput = {
    create?: XOR<PropertyCreateWithoutAssignedAgentMemberInput, PropertyUncheckedCreateWithoutAssignedAgentMemberInput> | PropertyCreateWithoutAssignedAgentMemberInput[] | PropertyUncheckedCreateWithoutAssignedAgentMemberInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAssignedAgentMemberInput | PropertyCreateOrConnectWithoutAssignedAgentMemberInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAssignedAgentMemberInput | PropertyUpsertWithWhereUniqueWithoutAssignedAgentMemberInput[]
    createMany?: PropertyCreateManyAssignedAgentMemberInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAssignedAgentMemberInput | PropertyUpdateWithWhereUniqueWithoutAssignedAgentMemberInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAssignedAgentMemberInput | PropertyUpdateManyWithWhereWithoutAssignedAgentMemberInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMediaType | EnumUserMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMediaTypeFilter<$PrismaModel> | $Enums.UserMediaType
  }

  export type NestedEnumMediaVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaVisibility | EnumMediaVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaVisibilityFilter<$PrismaModel> | $Enums.MediaVisibility
  }

  export type NestedEnumUserMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMediaType | EnumUserMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserMediaType[] | ListEnumUserMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumUserMediaTypeFilter<$PrismaModel>
  }

  export type NestedEnumMediaVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaVisibility | EnumMediaVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaVisibility[] | ListEnumMediaVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.MediaVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaVisibilityFilter<$PrismaModel>
    _max?: NestedEnumMediaVisibilityFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPropertyMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyMediaType | EnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyMediaTypeFilter<$PrismaModel> | $Enums.PropertyMediaType
  }

  export type NestedEnumPropertyMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyMediaType | EnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyMediaType[] | ListEnumPropertyMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyMediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyMediaTypeFilter<$PrismaModel>
  }

  export type NestedEnumAgencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyStatus | EnumAgencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyStatusFilter<$PrismaModel> | $Enums.AgencyStatus
  }

  export type NestedEnumAgencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyStatus | EnumAgencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyStatus[] | ListEnumAgencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgencyStatusFilter<$PrismaModel>
    _max?: NestedEnumAgencyStatusFilter<$PrismaModel>
  }

  export type NestedEnumAgencyMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyMemberRole | EnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyMemberRoleFilter<$PrismaModel> | $Enums.AgencyMemberRole
  }

  export type NestedEnumAgencyMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgencyMemberRole | EnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgencyMemberRole[] | ListEnumAgencyMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAgencyMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.AgencyMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgencyMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumAgencyMemberRoleFilter<$PrismaModel>
  }

  export type PropertyCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agency?: AgencyCreateNestedOneWithoutPropertyInput
    assignedAgentMember?: AgencyMemberCreateNestedOneWithoutAssignedPropertiesInput
    application?: ApplicationCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    agencyId?: string | null
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application?: ApplicationUncheckedCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCreatedByInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput>
  }

  export type PropertyCreateManyCreatedByInputEnvelope = {
    data: PropertyCreateManyCreatedByInput | PropertyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PersonProfileCreateWithoutUserInput = {
    id?: string
    fullName: string
    phone: string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    employmentStatus: string
    monthlyIncome: Decimal | DecimalJsLike | number | string
    householdSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonProfileUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    phone: string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    employmentStatus: string
    monthlyIncome: Decimal | DecimalJsLike | number | string
    householdSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonProfileCreateOrConnectWithoutUserInput = {
    where: PersonProfileWhereUniqueInput
    create: XOR<PersonProfileCreateWithoutUserInput, PersonProfileUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string
    propertyId: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateManyUserInputEnvelope = {
    data: EmailVerificationTokenCreateManyUserInput | EmailVerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMediaCreateWithoutUserInput = {
    id?: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMediaUncheckedCreateWithoutUserInput = {
    id?: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserMediaCreateOrConnectWithoutUserInput = {
    where: UserMediaWhereUniqueInput
    create: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput>
  }

  export type UserMediaCreateManyUserInputEnvelope = {
    data: UserMediaCreateManyUserInput | UserMediaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AgencyMemberCreateWithoutUserInput = {
    id?: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutMembersInput
    assignedProperties?: PropertyCreateNestedManyWithoutAssignedAgentMemberInput
  }

  export type AgencyMemberUncheckedCreateWithoutUserInput = {
    id?: string
    agencyId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedProperties?: PropertyUncheckedCreateNestedManyWithoutAssignedAgentMemberInput
  }

  export type AgencyMemberCreateOrConnectWithoutUserInput = {
    where: AgencyMemberWhereUniqueInput
    create: XOR<AgencyMemberCreateWithoutUserInput, AgencyMemberUncheckedCreateWithoutUserInput>
  }

  export type AgencyMemberCreateManyUserInputEnvelope = {
    data: AgencyMemberCreateManyUserInput | AgencyMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCreatedByInput, PropertyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCreatedByInput, PropertyUncheckedUpdateWithoutCreatedByInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCreatedByInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    listingType?: EnumListingTypeFilter<"Property"> | $Enums.ListingType
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    price?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFilter<"Property"> | string
    suburb?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    postcode?: StringFilter<"Property"> | string
    bedrooms?: IntNullableFilter<"Property"> | number | null
    bathrooms?: IntNullableFilter<"Property"> | number | null
    parkingSpaces?: IntNullableFilter<"Property"> | number | null
    isPublished?: BoolFilter<"Property"> | boolean
    createdById?: StringFilter<"Property"> | string
    agencyId?: StringNullableFilter<"Property"> | string | null
    assignedAgentMemberId?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type PersonProfileUpsertWithoutUserInput = {
    update: XOR<PersonProfileUpdateWithoutUserInput, PersonProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PersonProfileCreateWithoutUserInput, PersonProfileUncheckedCreateWithoutUserInput>
    where?: PersonProfileWhereInput
  }

  export type PersonProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonProfileWhereInput
    data: XOR<PersonProfileUpdateWithoutUserInput, PersonProfileUncheckedUpdateWithoutUserInput>
  }

  export type PersonProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    householdSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    employmentStatus?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    householdSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    propertyId?: StringFilter<"Application"> | string
    applicantId?: StringFilter<"Application"> | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    message?: StringNullableFilter<"Application"> | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationTokenScalarWhereInput
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationTokenScalarWhereInput = {
    AND?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    OR?: EmailVerificationTokenScalarWhereInput[]
    NOT?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    token?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"EmailVerificationToken"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
  }

  export type UserMediaUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMediaWhereUniqueInput
    update: XOR<UserMediaUpdateWithoutUserInput, UserMediaUncheckedUpdateWithoutUserInput>
    create: XOR<UserMediaCreateWithoutUserInput, UserMediaUncheckedCreateWithoutUserInput>
  }

  export type UserMediaUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMediaWhereUniqueInput
    data: XOR<UserMediaUpdateWithoutUserInput, UserMediaUncheckedUpdateWithoutUserInput>
  }

  export type UserMediaUpdateManyWithWhereWithoutUserInput = {
    where: UserMediaScalarWhereInput
    data: XOR<UserMediaUpdateManyMutationInput, UserMediaUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMediaScalarWhereInput = {
    AND?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
    OR?: UserMediaScalarWhereInput[]
    NOT?: UserMediaScalarWhereInput | UserMediaScalarWhereInput[]
    id?: StringFilter<"UserMedia"> | string
    userId?: StringFilter<"UserMedia"> | string
    mediaType?: EnumUserMediaTypeFilter<"UserMedia"> | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFilter<"UserMedia"> | $Enums.MediaVisibility
    url?: StringFilter<"UserMedia"> | string
    publicId?: StringFilter<"UserMedia"> | string
    isPrimary?: BoolFilter<"UserMedia"> | boolean
    createdAt?: DateTimeFilter<"UserMedia"> | Date | string
    updatedAt?: DateTimeFilter<"UserMedia"> | Date | string
  }

  export type AgencyMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: AgencyMemberWhereUniqueInput
    update: XOR<AgencyMemberUpdateWithoutUserInput, AgencyMemberUncheckedUpdateWithoutUserInput>
    create: XOR<AgencyMemberCreateWithoutUserInput, AgencyMemberUncheckedCreateWithoutUserInput>
  }

  export type AgencyMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: AgencyMemberWhereUniqueInput
    data: XOR<AgencyMemberUpdateWithoutUserInput, AgencyMemberUncheckedUpdateWithoutUserInput>
  }

  export type AgencyMemberUpdateManyWithWhereWithoutUserInput = {
    where: AgencyMemberScalarWhereInput
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type AgencyMemberScalarWhereInput = {
    AND?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
    OR?: AgencyMemberScalarWhereInput[]
    NOT?: AgencyMemberScalarWhereInput | AgencyMemberScalarWhereInput[]
    id?: StringFilter<"AgencyMember"> | string
    agencyId?: StringFilter<"AgencyMember"> | string
    userId?: StringFilter<"AgencyMember"> | string
    role?: EnumAgencyMemberRoleFilter<"AgencyMember"> | $Enums.AgencyMemberRole
    isActive?: BoolFilter<"AgencyMember"> | boolean
    createdAt?: DateTimeFilter<"AgencyMember"> | Date | string
    updatedAt?: DateTimeFilter<"AgencyMember"> | Date | string
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateWithoutMediaInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMediaInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
  }

  export type UserUpsertWithoutMediaInput = {
    update: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type AgencyCreateWithoutPropertyInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: AgencyMemberCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutPropertyInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: AgencyMemberUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutPropertyInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutPropertyInput, AgencyUncheckedCreateWithoutPropertyInput>
  }

  export type AgencyMemberCreateWithoutAssignedPropertiesInput = {
    id?: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agency: AgencyCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutAgencyMembershipsInput
  }

  export type AgencyMemberUncheckedCreateWithoutAssignedPropertiesInput = {
    id?: string
    agencyId: string
    userId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgencyMemberCreateOrConnectWithoutAssignedPropertiesInput = {
    where: AgencyMemberWhereUniqueInput
    create: XOR<AgencyMemberCreateWithoutAssignedPropertiesInput, AgencyMemberUncheckedCreateWithoutAssignedPropertiesInput>
  }

  export type ApplicationCreateWithoutPropertyInput = {
    id?: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutPropertyInput = {
    id?: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutPropertyInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutPropertyInput, ApplicationUncheckedCreateWithoutPropertyInput>
  }

  export type ApplicationCreateManyPropertyInputEnvelope = {
    data: ApplicationCreateManyPropertyInput | ApplicationCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyMediaCreateWithoutPropertyInput = {
    id?: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyMediaUncheckedCreateWithoutPropertyInput = {
    id?: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyMediaCreateOrConnectWithoutPropertyInput = {
    where: PropertyMediaWhereUniqueInput
    create: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyMediaCreateManyPropertyInputEnvelope = {
    data: PropertyMediaCreateManyPropertyInput | PropertyMediaCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AgencyUpsertWithoutPropertyInput = {
    update: XOR<AgencyUpdateWithoutPropertyInput, AgencyUncheckedUpdateWithoutPropertyInput>
    create: XOR<AgencyCreateWithoutPropertyInput, AgencyUncheckedCreateWithoutPropertyInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutPropertyInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutPropertyInput, AgencyUncheckedUpdateWithoutPropertyInput>
  }

  export type AgencyUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: AgencyMemberUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: AgencyMemberUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyMemberUpsertWithoutAssignedPropertiesInput = {
    update: XOR<AgencyMemberUpdateWithoutAssignedPropertiesInput, AgencyMemberUncheckedUpdateWithoutAssignedPropertiesInput>
    create: XOR<AgencyMemberCreateWithoutAssignedPropertiesInput, AgencyMemberUncheckedCreateWithoutAssignedPropertiesInput>
    where?: AgencyMemberWhereInput
  }

  export type AgencyMemberUpdateToOneWithWhereWithoutAssignedPropertiesInput = {
    where?: AgencyMemberWhereInput
    data: XOR<AgencyMemberUpdateWithoutAssignedPropertiesInput, AgencyMemberUncheckedUpdateWithoutAssignedPropertiesInput>
  }

  export type AgencyMemberUpdateWithoutAssignedPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutAgencyMembershipsNestedInput
  }

  export type AgencyMemberUncheckedUpdateWithoutAssignedPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutPropertyInput, ApplicationUncheckedUpdateWithoutPropertyInput>
    create: XOR<ApplicationCreateWithoutPropertyInput, ApplicationUncheckedCreateWithoutPropertyInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutPropertyInput, ApplicationUncheckedUpdateWithoutPropertyInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutPropertyInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyMediaUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyMediaWhereUniqueInput
    update: XOR<PropertyMediaUpdateWithoutPropertyInput, PropertyMediaUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyMediaCreateWithoutPropertyInput, PropertyMediaUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyMediaUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyMediaWhereUniqueInput
    data: XOR<PropertyMediaUpdateWithoutPropertyInput, PropertyMediaUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyMediaUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyMediaScalarWhereInput
    data: XOR<PropertyMediaUpdateManyMutationInput, PropertyMediaUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyMediaScalarWhereInput = {
    AND?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
    OR?: PropertyMediaScalarWhereInput[]
    NOT?: PropertyMediaScalarWhereInput | PropertyMediaScalarWhereInput[]
    id?: StringFilter<"PropertyMedia"> | string
    propertyId?: StringFilter<"PropertyMedia"> | string
    mediaType?: EnumPropertyMediaTypeFilter<"PropertyMedia"> | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFilter<"PropertyMedia"> | $Enums.MediaVisibility
    url?: StringFilter<"PropertyMedia"> | string
    publicId?: StringFilter<"PropertyMedia"> | string
    isPrimary?: BoolFilter<"PropertyMedia"> | boolean
    sortOrder?: IntFilter<"PropertyMedia"> | number
    createdAt?: DateTimeFilter<"PropertyMedia"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyMedia"> | Date | string
  }

  export type PropertyCreateWithoutApplicationInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPropertiesInput
    agency?: AgencyCreateNestedOneWithoutPropertyInput
    assignedAgentMember?: AgencyMemberCreateNestedOneWithoutAssignedPropertiesInput
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutApplicationInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    agencyId?: string | null
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutApplicationInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutApplicationInput, PropertyUncheckedCreateWithoutApplicationInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type PropertyUpsertWithoutApplicationInput = {
    update: XOR<PropertyUpdateWithoutApplicationInput, PropertyUncheckedUpdateWithoutApplicationInput>
    create: XOR<PropertyCreateWithoutApplicationInput, PropertyUncheckedCreateWithoutApplicationInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutApplicationInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutApplicationInput, PropertyUncheckedUpdateWithoutApplicationInput>
  }

  export type PropertyUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    agency?: AgencyUpdateOneWithoutPropertyNestedInput
    assignedAgentMember?: AgencyMemberUpdateOneWithoutAssignedPropertiesNestedInput
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmailVerificationTokensInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationTokensInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
  }

  export type UserUpsertWithoutEmailVerificationTokensInput = {
    update: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyCreateWithoutMediaInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPropertiesInput
    agency?: AgencyCreateNestedOneWithoutPropertyInput
    assignedAgentMember?: AgencyMemberCreateNestedOneWithoutAssignedPropertiesInput
    application?: ApplicationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    agencyId?: string | null
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application?: ApplicationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutMediaInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
  }

  export type PropertyUpsertWithoutMediaInput = {
    update: XOR<PropertyUpdateWithoutMediaInput, PropertyUncheckedUpdateWithoutMediaInput>
    create: XOR<PropertyCreateWithoutMediaInput, PropertyUncheckedCreateWithoutMediaInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutMediaInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutMediaInput, PropertyUncheckedUpdateWithoutMediaInput>
  }

  export type PropertyUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    agency?: AgencyUpdateOneWithoutPropertyNestedInput
    assignedAgentMember?: AgencyMemberUpdateOneWithoutAssignedPropertiesNestedInput
    application?: ApplicationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AgencyMemberCreateWithoutAgencyInput = {
    id?: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAgencyMembershipsInput
    assignedProperties?: PropertyCreateNestedManyWithoutAssignedAgentMemberInput
  }

  export type AgencyMemberUncheckedCreateWithoutAgencyInput = {
    id?: string
    userId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedProperties?: PropertyUncheckedCreateNestedManyWithoutAssignedAgentMemberInput
  }

  export type AgencyMemberCreateOrConnectWithoutAgencyInput = {
    where: AgencyMemberWhereUniqueInput
    create: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput>
  }

  export type AgencyMemberCreateManyAgencyInputEnvelope = {
    data: AgencyMemberCreateManyAgencyInput | AgencyMemberCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutAgencyInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPropertiesInput
    assignedAgentMember?: AgencyMemberCreateNestedOneWithoutAssignedPropertiesInput
    application?: ApplicationCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAgencyInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application?: ApplicationUncheckedCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAgencyInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAgencyInput, PropertyUncheckedCreateWithoutAgencyInput>
  }

  export type PropertyCreateManyAgencyInputEnvelope = {
    data: PropertyCreateManyAgencyInput | PropertyCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type AgencyMemberUpsertWithWhereUniqueWithoutAgencyInput = {
    where: AgencyMemberWhereUniqueInput
    update: XOR<AgencyMemberUpdateWithoutAgencyInput, AgencyMemberUncheckedUpdateWithoutAgencyInput>
    create: XOR<AgencyMemberCreateWithoutAgencyInput, AgencyMemberUncheckedCreateWithoutAgencyInput>
  }

  export type AgencyMemberUpdateWithWhereUniqueWithoutAgencyInput = {
    where: AgencyMemberWhereUniqueInput
    data: XOR<AgencyMemberUpdateWithoutAgencyInput, AgencyMemberUncheckedUpdateWithoutAgencyInput>
  }

  export type AgencyMemberUpdateManyWithWhereWithoutAgencyInput = {
    where: AgencyMemberScalarWhereInput
    data: XOR<AgencyMemberUpdateManyMutationInput, AgencyMemberUncheckedUpdateManyWithoutAgencyInput>
  }

  export type PropertyUpsertWithWhereUniqueWithoutAgencyInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutAgencyInput, PropertyUncheckedUpdateWithoutAgencyInput>
    create: XOR<PropertyCreateWithoutAgencyInput, PropertyUncheckedCreateWithoutAgencyInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutAgencyInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutAgencyInput, PropertyUncheckedUpdateWithoutAgencyInput>
  }

  export type PropertyUpdateManyWithWhereWithoutAgencyInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutAgencyInput>
  }

  export type AgencyCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyCreateNestedManyWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string | null
    addressLine1?: string | null
    suburb?: string | null
    state?: string | null
    postcode?: string | null
    status?: $Enums.AgencyStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    property?: PropertyUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencyCreateOrConnectWithoutMembersInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutAgencyMembershipsInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgencyMembershipsInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgencyMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgencyMembershipsInput, UserUncheckedCreateWithoutAgencyMembershipsInput>
  }

  export type PropertyCreateWithoutAssignedAgentMemberInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPropertiesInput
    agency?: AgencyCreateNestedOneWithoutPropertyInput
    application?: ApplicationCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAssignedAgentMemberInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    agencyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application?: ApplicationUncheckedCreateNestedManyWithoutPropertyInput
    media?: PropertyMediaUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAssignedAgentMemberInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAssignedAgentMemberInput, PropertyUncheckedCreateWithoutAssignedAgentMemberInput>
  }

  export type PropertyCreateManyAssignedAgentMemberInputEnvelope = {
    data: PropertyCreateManyAssignedAgentMemberInput | PropertyCreateManyAssignedAgentMemberInput[]
    skipDuplicates?: boolean
  }

  export type AgencyUpsertWithoutMembersInput = {
    update: XOR<AgencyUpdateWithoutMembersInput, AgencyUncheckedUpdateWithoutMembersInput>
    create: XOR<AgencyCreateWithoutMembersInput, AgencyUncheckedCreateWithoutMembersInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutMembersInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutMembersInput, AgencyUncheckedUpdateWithoutMembersInput>
  }

  export type AgencyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateManyWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    suburb?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgencyStatusFieldUpdateOperationsInput | $Enums.AgencyStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type UserUpsertWithoutAgencyMembershipsInput = {
    update: XOR<UserUpdateWithoutAgencyMembershipsInput, UserUncheckedUpdateWithoutAgencyMembershipsInput>
    create: XOR<UserCreateWithoutAgencyMembershipsInput, UserUncheckedCreateWithoutAgencyMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgencyMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgencyMembershipsInput, UserUncheckedUpdateWithoutAgencyMembershipsInput>
  }

  export type UserUpdateWithoutAgencyMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgencyMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithWhereUniqueWithoutAssignedAgentMemberInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutAssignedAgentMemberInput, PropertyUncheckedUpdateWithoutAssignedAgentMemberInput>
    create: XOR<PropertyCreateWithoutAssignedAgentMemberInput, PropertyUncheckedCreateWithoutAssignedAgentMemberInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutAssignedAgentMemberInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutAssignedAgentMemberInput, PropertyUncheckedUpdateWithoutAssignedAgentMemberInput>
  }

  export type PropertyUpdateManyWithWhereWithoutAssignedAgentMemberInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutAssignedAgentMemberInput>
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    media?: UserMediaCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string
    email: string
    fullName: string
    passwordHash?: string | null
    phone?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    profile?: PersonProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    media?: UserMediaUncheckedCreateNestedManyWithoutUserInput
    agencyMemberships?: AgencyMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    media?: UserMediaUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    profile?: PersonProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    media?: UserMediaUncheckedUpdateManyWithoutUserNestedInput
    agencyMemberships?: AgencyMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    agencyId?: string | null
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: string
    propertyId: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailVerificationTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserMediaCreateManyUserInput = {
    id?: string
    mediaType: $Enums.UserMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgencyMemberCreateManyUserInput = {
    id?: string
    agencyId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PropertyUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneWithoutPropertyNestedInput
    assignedAgentMember?: AgencyMemberUpdateOneWithoutAssignedPropertiesNestedInput
    application?: ApplicationUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUncheckedUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMediaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumUserMediaTypeFieldUpdateOperationsInput | $Enums.UserMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencyUpdateOneRequiredWithoutMembersNestedInput
    assignedProperties?: PropertyUpdateManyWithoutAssignedAgentMemberNestedInput
  }

  export type AgencyMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedProperties?: PropertyUncheckedUpdateManyWithoutAssignedAgentMemberNestedInput
  }

  export type AgencyMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    agencyId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyPropertyInput = {
    id?: string
    applicantId: string
    status?: $Enums.ApplicationStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyMediaCreateManyPropertyInput = {
    id?: string
    mediaType: $Enums.PropertyMediaType
    visibility: $Enums.MediaVisibility
    url: string
    publicId: string
    isPrimary?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyMediaUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumPropertyMediaTypeFieldUpdateOperationsInput | $Enums.PropertyMediaType
    visibility?: EnumMediaVisibilityFieldUpdateOperationsInput | $Enums.MediaVisibility
    url?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyMemberCreateManyAgencyInput = {
    id?: string
    userId: string
    role: $Enums.AgencyMemberRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCreateManyAgencyInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    assignedAgentMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgencyMemberUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgencyMembershipsNestedInput
    assignedProperties?: PropertyUpdateManyWithoutAssignedAgentMemberNestedInput
  }

  export type AgencyMemberUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedProperties?: PropertyUncheckedUpdateManyWithoutAssignedAgentMemberNestedInput
  }

  export type AgencyMemberUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumAgencyMemberRoleFieldUpdateOperationsInput | $Enums.AgencyMemberRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    assignedAgentMember?: AgencyMemberUpdateOneWithoutAssignedPropertiesNestedInput
    application?: ApplicationUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUncheckedUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    assignedAgentMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyAssignedAgentMemberInput = {
    id?: string
    title: string
    description: string
    listingType: $Enums.ListingType
    propertyType: $Enums.PropertyType
    price: Decimal | DecimalJsLike | number | string
    addressLine1: string
    suburb: string
    state: string
    postcode: string
    bedrooms?: number | null
    bathrooms?: number | null
    parkingSpaces?: number | null
    isPublished?: boolean
    createdById: string
    agencyId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutAssignedAgentMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    agency?: AgencyUpdateOneWithoutPropertyNestedInput
    application?: ApplicationUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAssignedAgentMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUncheckedUpdateManyWithoutPropertyNestedInput
    media?: PropertyMediaUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutAssignedAgentMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    suburb?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    bathrooms?: NullableIntFieldUpdateOperationsInput | number | null
    parkingSpaces?: NullableIntFieldUpdateOperationsInput | number | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    agencyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}