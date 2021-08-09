import { trigger,transition,style, query,animateChild,animate,group } from '@angular/animations';


export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, Two => Three, Three => Four,One=> Four ,One => Three, Two => Four' , [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		],{optional:true}),
		query(':enter', [style({ opacity: 0 })]),
		query(':leave', animateChild(),{optional:true}),
		group([
			query(':leave', [animate('0.25s ease-out', style({  opacity: 0 }))],{optional:true}),
			query(':enter', [animate('0.25s ease-out', style({  opacity: 1 }))],{optional:true})
		]),
		query(':enter', animateChild(),{optional:true})
    ]),
    

	transition('Four => Three, Three => Two, Two => One, Four => One, Four => Two, Three => One' , [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		],{optional:true}),
		query(':enter', [style({  opacity: 0 })],{optional:true}),
		query(':leave', animateChild(),{optional:true}),
		group([
			query(':leave', [animate('0.25s ease-out', style({  opacity: 0 }))],{optional:true}),
			query(':enter', [animate('0.25s ease-out', style({  opacity: 1 }))],{optional:true})
		]),
		query(':enter', animateChild(),{optional:true})
	])
]);


export const fadeinout =     trigger(
	'inOutAnimation', 
	[
	  transition(
		':enter', 
		[
		  style({ height: 0, opacity: 0 }),
		  animate('1s ease-out', 
				  style({ height:'15vh' , opacity: 1 }))
		]
	  ),
	  transition(
		':leave', 
		[
		  style({ height: '15vh', opacity: 1 }),
		  animate('1s ease-in', 
				  style({ height: 0, opacity: 0 }))
		]
	  )
	],
	
  )