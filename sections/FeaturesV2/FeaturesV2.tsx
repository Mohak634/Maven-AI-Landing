'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './FeaturesV2.module.css'

type FeatureData = {
    id: string
    title: string
    description: string
    imageSrc: string
}

const features: FeatureData[] = [
    {
        id: 'feature-assistant',
        title: 'Assistant',
        description: 'Your AI assistant, always ready to help you with your tasks and projects with deep contextual understanding.',
        imageSrc: '/Features/Assistant.png',
    },
    {
        id: 'feature-integrations',
        title: 'Integrations',
        description: 'Maven seamlessly integrates with your existing tools and workflows to provide a frictionless experience across platforms.',
        imageSrc: '/Features/Integrations.png',
    },
    {
        id: 'feature-knowledge',
        title: 'Knowledge Base',
        description: 'Maven strictly utilizes your organization\'s internal knowledge base to ensure completely accurate and private assistance.',
        imageSrc: '/Features/Knowledge.png',
    },
    {
        id: 'feature-vault',
        title: 'Secure Vault',
        description: 'Strict privacy controls ensure that Maven stores your files and critical documents in an impenetrable, secure vault.',
        imageSrc: '/Features/Vault.png',
    },
    {
        id: 'feature-workflows',
        title: 'Automated Workflows',
        description: 'Maven empowers your team to rapidly create and manage complex workflows, automating repetitive tasks with ease.',
        imageSrc: '/Features/Workflows.png',
    },
]

export default function FeaturesV2() {
    const [activeIndex, setActiveIndex] = useState(0)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        // Only initialize the observer on the client
        if (typeof window === 'undefined') return

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Trigger when 60% of the card is visible
        }

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'))
                    if (!isNaN(index)) {
                        setActiveIndex(index)
                    }
                }
            })
        }, options)

        cardsRef.current.forEach((card) => {
            if (card) {
                observerRef.current?.observe(card)
            }
        })

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [])

    return (
        <section className={styles.section} id="features-v2">
            <div className={styles.left}>
                <div className={styles.textContent}>
                    {features.map((feature, index) => (
                        <div
                            key={`text-${feature.id}`}
                            className={`${styles.textItem} ${index === activeIndex ? styles.textItemActive : ''
                                }`}
                        >
                            <h2 className={styles.title}>{feature.title}</h2>
                            <p className={styles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.right}>
                {features.map((feature, index) => {
                    const isActive = index === activeIndex

                    return (
                        <div
                            key={`card-${feature.id}`}
                            className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                            data-index={index}
                            ref={(el) => {
                                cardsRef.current[index] = el
                            }}
                        >
                            {/* Mobile-only title & description rendered inline per card */}
                            <div className={styles.mobileTextContent}>
                                <h2 className={styles.title}>{feature.title}</h2>
                                <p className={styles.description}>{feature.description}</p>
                            </div>

                            <div className={styles.cardInner}>
                                <div className={styles.cardBgWrapper}>
                                    <img
                                        src="/Features/Bg.png"
                                        alt=""
                                        className={styles.cardBgImage}
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className={styles.cardImageWrapper}>
                                    <img
                                        src={feature.imageSrc}
                                        alt={`${feature.title} interface preview`}
                                        className={styles.cardImage}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
