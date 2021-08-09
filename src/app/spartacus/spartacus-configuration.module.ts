import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
    },
    //<I18nConfig>
  }), provideConfig({
    i18n: {
      resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
     // new code
     providers: [
      provideConfig({
        i18n: {
            resources: {
                en: translations, // or YOUR_ENGLISH_TRANSLATIONS,
                de: 'Punjabi',
                
            },
            chunks: translationChunksConfig
        }
      })
    ],
     // finish codo

    
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '3.4'
    }
  })]
})
export class SpartacusConfigurationModule { }
