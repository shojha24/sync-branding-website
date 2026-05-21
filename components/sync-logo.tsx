import Image from "next/image"

export function SyncLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <Image
      src="/sync-logo.svg"
      alt="Sync Logo"
      width={48}
      height={48}
      className={className}
    />
  )
}

export function SyncIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src="/sync-mask.svg"
      alt="Sync"
      width={32}
      height={32}
      className={className}
    />
  )
}
