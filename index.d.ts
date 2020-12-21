export type SupportedAuthenticationTypes = Array<'FaceId' | 'TouchId'>

type LocalAuthenticate = {
    hasHardware(): Promise<boolean>
    isEnrolled(): Promise<boolean>
    supportedAuthenticationTypes(): Promise<SupportedAuthenticationTypes>
    authenticate(reason: string): Promise<boolean>
    cancelAuthenticate(): Promise<void>
}

declare const localAuthenticate: LocalAuthenticate

export default localAuthenticate