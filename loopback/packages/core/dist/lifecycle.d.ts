import { Binding, BindingSpec, BindingTagFilter, Constructor, ValueOrPromise } from '@loopback/context';
/**
 * Observers to handle life cycle start/stop events
 */
export interface LifeCycleObserver {
    /**
     * The method to be invoked during `start`
     */
    start?(): ValueOrPromise<void>;
    /**
     * The method to be invoked during `stop`
     */
    stop?(): ValueOrPromise<void>;
}
/**
 * Test if an object implements LifeCycleObserver
 * @param obj - An object
 */
export declare function isLifeCycleObserver(obj: object): obj is LifeCycleObserver;
/**
 * Test if a class implements LifeCycleObserver
 * @param ctor - A class
 */
export declare function isLifeCycleObserverClass(ctor: Constructor<unknown>): ctor is Constructor<LifeCycleObserver>;
/**
 * A `BindingTemplate` function to configure the binding as life cycle observer
 * by tagging it with `CoreTags.LIFE_CYCLE_OBSERVER`.
 *
 * @param binding - Binding object
 */
export declare function asLifeCycleObserver<T = unknown>(binding: Binding<T>): Binding<T>;
/**
 * Find all life cycle observer bindings. By default, a binding tagged with
 * `CoreTags.LIFE_CYCLE_OBSERVER`. It's used as `BindingFilter`.
 */
export declare const lifeCycleObserverFilter: BindingTagFilter;
/**
 * Sugar decorator to mark a class as life cycle observer
 * @param group - Optional observer group name
 * @param specs - Optional bindings specs
 */
export declare function lifeCycleObserver(group?: string, ...specs: BindingSpec[]): ClassDecorator;
